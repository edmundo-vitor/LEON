import ButtonPrimary from "../../../components/ButtonPrimary";
import { FormInput } from "../../../components/FormInput";
import { HStack } from "../../../components/HStack";
import SidebarMenu from "../../../components/SidebarMenu";
import { Stack } from "../../../components/Stack";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Teacher, useTeachers } from "../../../hooks/useTeachers";
import { useBranches } from "../../../hooks/useBranches";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AiFillDelete } from "react-icons/ai";
import { useMutation } from "react-query";
import { requestBackend } from "../../../utils/request";
import { queryClient } from "../../../utils/queryClient";
import { useRouter } from "next/dist/client/router";

export default function CreateModality() {
  const router = useRouter();

  const { branches } = useBranches();

  const [teacherSearchTerm, setTeacherSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher>();
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(-1);
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState<Date | [Date, Date]>(new Date());
  const [endDate, setEndDate] = useState<Date | [Date, Date]>(new Date());
  const [vacancies, setVacancies] = useState(0);
  const [schedules, setSchedules] = useState<any[]>([]);

  useEffect(() => {
    if (branches?.length > 0) {
      setSelectedBranchIndex(0);
    }
  }, [branches]);

  const {
    data: teachers,
    isLoading: isLoadingTeachers,
    error: teachersError,
  } = useTeachers({ name: teacherSearchTerm });

  function addSchedule() {
    if (!selectedTeacher) {
      alert("Escolha um professor");
    } else if (selectedBranchIndex === -1) {
      alert("Escolha uma filial");
    } else {
      const branch = branches[selectedBranchIndex];
      const newSchedule = {
        branchId: branch.id,
        teacherId: selectedTeacher.id,
        teacherName: selectedTeacher.name,
        branchName: branch.name,
        maxUsers: vacancies,
        startDate,
        endDate,
      };
      setSchedules((prevState) => [...prevState, newSchedule]);
    }
  }

  function handleScheduleRemoval(index: number) {
    setSchedules((prevState) => {
      return prevState.filter((_, i) => i !== index);
    });
  }

  const createModalityMutation = useMutation(
    async (modality: any) => {
      const { data } = await requestBackend({
        method: "POST",
        url: "/modalities",
        data: modality,
      });

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("modalities");
      },
    }
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(schedules);

    await createModalityMutation.mutateAsync({
      name,
      schedules,
    });

    router.push("/modalities");
  }

  return (
    <>
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <h2>Cadastrar nova Modalidade</h2>
            <div className={styles.gridContainer}>
              <section>
                <Stack spacing="1">
                  <FormInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    labelText="Nome"
                    obrigatory
                  />
                  <h3>Cadastrar horário</h3>
                  <div className={styles.schedule}>
                    <Stack>
                      <HStack>
                        <div>
                          <label>Início</label>
                          <DatePicker
                            timeInputLabel="Hora:"
                            selected={startDate as Date}
                            showTimeInput
                            dateFormat="dd/MM/yyyy h:mm aa"
                            onChange={(date) => {
                              setStartDate(date);
                            }}
                          />
                        </div>
                        <div>
                          <label>Término</label>
                          <DatePicker
                            timeInputLabel="Hora:"
                            selected={endDate as Date}
                            showTimeInput
                            dateFormat="dd/MM/yyyy h:mm aa"
                            onChange={(date) => {
                              setEndDate(date);
                            }}
                          />
                        </div>
                        <Stack spacing="0.01">
                          <label>Filial</label>
                          <select
                            onChange={(e) =>
                              setSelectedBranchIndex(
                                Number(e.currentTarget.value)
                              )
                            }
                            style={{ width: "100px" }}
                          >
                            {branches.map((branch, index) => (
                              <option value={index} key={branch.id}>
                                {branch.name}
                              </option>
                            ))}
                          </select>
                        </Stack>
                        <div>
                          <label>Vagas</label>
                          <input
                            value={vacancies}
                            onChange={(e) =>
                              setVacancies(Number(e.target.value))
                            }
                            style={{ width: "50px" }}
                          />
                        </div>
                      </HStack>
                      <ButtonPrimary type="button" onClick={addSchedule}>
                        Adicionar
                      </ButtonPrimary>
                    </Stack>
                  </div>
                </Stack>
              </section>
              <section>
                {isLoadingTeachers ? (
                  <p>Carregando os dados...</p>
                ) : teachersError ? (
                  <p>Falha na recuparação dos dados.</p>
                ) : teachers.length === 0 ? (
                  <p>
                    Nenhum professor cadastrado. Cadastre alguma para continuar
                  </p>
                ) : (
                  <div>
                    <span style={{ fontWeight: 500 }}>
                      Clique para escolher algum professor para o cadastro do
                      horário
                    </span>
                    <div className={styles.tabbleWrapper}>
                      <table>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                          </tr>
                        </thead>
                        <tbody>
                          {teachers.map((teacher) => (
                            <tr
                              key={teacher.id}
                              onClick={() => setSelectedTeacher(teacher)}
                              style={{
                                background:
                                  selectedTeacher?.id === teacher.id
                                    ? "#B8B4D8"
                                    : "",
                              }}
                            >
                              <td>{teacher.id}</td>
                              <td>{teacher.name}</td>
                              <td>{teacher.telephone}</td>
                              <td>{teacher.address}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                <FormInput
                  onChange={(e) => setTeacherSearchTerm(e.target.value)}
                  obrigatory
                  placeholder="Pesquise o professor pelo nome"
                />
              </section>
            </div>
            {schedules.length > 0 && (
              <div style={{ marginTop: "2rem" }}>
                <p
                  style={{
                    fontWeight: 500,
                    textAlign: "center",
                    color: "#333",
                  }}
                >
                  Horários Cadastrados
                </p>
                <div className={styles.tabbleWrapper}>
                  <table>
                    <thead>
                      <tr>
                        <th>Início</th>
                        <th>Fim</th>
                        <th>Professor</th>
                        <th>Vagas</th>
                        <th>Filial</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {schedules.map((schedule, index) => (
                        <tr key={Math.random()}>
                          <td>{schedule.startDate.toLocaleString()}</td>
                          <td>{schedule.endDate.toLocaleString()}</td>
                          <td>{schedule.teacherName}</td>
                          <td>{schedule.maxUsers}</td>
                          <td>{schedule.branchName}</td>
                          <td>
                            <AiFillDelete
                              style={{ cursor: "pointer" }}
                              size="20"
                              color="red"
                              onClick={() => handleScheduleRemoval(index)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <HStack
              spacing="1"
              style={{ justifyContent: "flex-end", marginTop: "2rem" }}
            >
              <Link href="/modalities" passHref>
                <a>
                  <ButtonPrimary style={{ background: "gray" }}>
                    Cancelar
                  </ButtonPrimary>
                </a>
              </Link>
              <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
            </HStack>
          </form>
        </div>
      </div>
    </>
  );
}
