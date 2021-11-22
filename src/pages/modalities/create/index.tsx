import ButtonPrimary from "../../../components/ButtonPrimary";
import { FormInput } from "../../../components/FormInput";
import { HStack } from "../../../components/HStack";
import NavBar from "../../../components/NavBar";
import SidebarMenu from "../../../components/SidebarMenu";
import { Stack } from "../../../components/Stack";
import { RiDeleteBack2Fill } from "react-icons/ri";
import styles from "./styles.module.scss";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Modality, Schedule } from "../../../hooks/useModalities";
import { MouseEvent } from "react";

export default function CreateModality() {
  // const [numberOfFiles, setNumberOfFiles] = useState(1);

  const [modality, setModality] = useState<Modality>({
    id: 5,
    name: "",
    description: "",
    schedules: [],
  });

  const [currentSchedule, setCurrentSchedule] = useState<Schedule>({
    id: Math.random(),
    days: [],
    end: new Date(),
    start: new Date(),
    teacher: "",
    vacancies: 0,
  });

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  function handleAddDayButtonClick(e: ChangeEvent<HTMLInputElement>) {
    const day = e.target.value;

    if (e.target.checked) {
      setCurrentSchedule((prevState) => ({
        ...prevState,
        days: [...prevState.days, day],
      }));
    } else if (currentSchedule.days.includes(day)) {
      setCurrentSchedule((prevState) => ({
        ...prevState,
        days: prevState.days.filter((d) => d !== day),
      }));
    }
  }

  function handleAddScheduleButtonClick() {
    // fazer a verificação com os horários já inseridos

    setSchedules((prevState) => [...prevState, currentSchedule]);
    setCurrentSchedule({
      id: Math.random(),
      days: [],
      end: new Date(),
      start: new Date(),
      teacher: "",
      vacancies: 0,
    });
  }

  return (
    <>
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form>
            <h2>Cadastrar nova Modalidade</h2>
            <div className={styles.gridContainer}>
              <section>
                <Stack spacing="1">
                  <FormInput
                    labelText="Nome"
                    value={modality.name}
                    onChange={(e) =>
                      setModality((prevState) => ({
                        ...prevState,
                        name: e.target.value,
                      }))
                    }
                    obrigatory
                  />
                  <FormInput
                    labelText="Descrição"
                    value={modality.description}
                    onChange={(e) =>
                      setModality((prevState) => ({
                        ...prevState,
                        description: e.target.value,
                      }))
                    }
                    obrigatory
                  />
                  <h3>Cadastrar horário</h3>
                  <div className={styles.schedule}>
                    <Stack>
                      <HStack>
                        <FormInput
                          labelText="Início"
                          type="time"
                          obrigatory
                          style={{ width: "fit-content" }}
                          onChange={(e) =>
                            setCurrentSchedule((prevState) => ({
                              ...prevState,
                              start: new Date(e.target.value),
                            }))
                          }
                        />
                        <FormInput
                          labelText="Fim"
                          type="time"
                          obrigatory
                          style={{ width: "fit-content" }}
                          onChange={(e) => {
                            console.log(e.target.value);
                            setCurrentSchedule((prevState) => ({
                              ...prevState,
                              end: new Date(e.target.value),
                            }));
                          }}
                        />
                        <FormInput
                          labelText="Vagas"
                          obrigatory
                          style={{ width: "100px" }}
                          value={currentSchedule.vacancies}
                          onChange={(e) =>
                            setCurrentSchedule((prevState) => ({
                              ...prevState,
                              vacancies: Number(e.target.value),
                            }))
                          }
                        />
                        <FormInput
                          labelText="Professor"
                          obrigatory
                          placeholder="Pesquise o professor pelo nome"
                          value={currentSchedule.teacher}
                          onChange={(e) =>
                            setCurrentSchedule((prevState) => ({
                              ...prevState,
                              teacher: e.target.value,
                            }))
                          }
                        />
                      </HStack>
                      <div className={styles.days}>
                        <HStack spacing="1">
                          <span>Seg</span>
                          <FormInput
                            value="Seg"
                            type="checkbox"
                            onChange={handleAddDayButtonClick}
                          />
                          <span>Ter</span>
                          <FormInput
                            value="Ter"
                            type="checkbox"
                            onChange={handleAddDayButtonClick}
                          />
                          <span>Qua</span>
                          <FormInput
                            value="Qua"
                            type="checkbox"
                            onChange={handleAddDayButtonClick}
                          />
                          <span>Qui</span>
                          <FormInput
                            value="Qui"
                            type="checkbox"
                            onChange={handleAddDayButtonClick}
                          />
                          <span>Sex</span>
                          <FormInput
                            value="Sex"
                            type="checkbox"
                            onChange={handleAddDayButtonClick}
                          />
                          <span>Sab</span>
                          <FormInput
                            value="Sab"
                            type="checkbox"
                            onChange={handleAddDayButtonClick}
                          />
                        </HStack>
                        <ButtonPrimary
                          type="button"
                          onClick={handleAddScheduleButtonClick}
                        >
                          +
                        </ButtonPrimary>
                      </div>
                    </Stack>
                  </div>
                </Stack>
              </section>
              {/* <section>
                {Array(numberOfFiles)
                  .fill(null)
                  .map((index) => (
                    <FormInput key={index} type="file" />
                  ))}
                <ButtonPrimary
                  onClick={() =>
                    numberOfFiles < 5 && setNumberOfFiles((ps) => ps + 1)
                  }
                />
              </section> */}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Seg</th>
                  <th>Ter</th>
                  <th>Qua</th>
                  <th>Qui</th>
                  <th>Sex</th>
                  <th>Sab</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedule) => (
                  <tr key={schedule.id}>
                    <td>
                      {schedule.days.includes("Seg") && (
                        <div className={styles.cellContent}>
                          <HStack spacing="0.5">
                            <time>10:00 - 11:00</time>
                            <RiDeleteBack2Fill color="red" />
                          </HStack>
                          <p>{schedule.teacher}</p>
                          <span>{schedule.vacancies}</span>
                        </div>
                      )}
                    </td>
                    <td>
                      {schedule.days.includes("Ter") && (
                        <div className={styles.cellContent}>
                          <HStack spacing="0.5">
                            <time>10:00 - 11:00</time>
                            <RiDeleteBack2Fill color="red" />
                          </HStack>
                          <p>{schedule.teacher}</p>
                          <span>{schedule.vacancies}</span>
                        </div>
                      )}
                    </td>
                    <td>
                      {schedule.days.includes("Qua") && (
                        <div className={styles.cellContent}>
                          <HStack spacing="0.5">
                            <time>10:00 - 11:00</time>
                            <RiDeleteBack2Fill color="red" />
                          </HStack>
                          <p>{schedule.teacher}</p>
                          <span>{schedule.vacancies}</span>
                        </div>
                      )}
                    </td>
                    <td>
                      {schedule.days.includes("Qui") && (
                        <div className={styles.cellContent}>
                          <HStack spacing="0.5">
                            <time>10:00 - 11:00</time>
                            <RiDeleteBack2Fill color="red" />
                          </HStack>
                          <p>{schedule.teacher}</p>
                          <span>{schedule.vacancies}</span>
                        </div>
                      )}
                    </td>
                    <td>
                      {schedule.days.includes("Sex") && (
                        <div className={styles.cellContent}>
                          <HStack spacing="0.5">
                            <time>10:00 - 11:00</time>
                            <RiDeleteBack2Fill color="red" />
                          </HStack>
                          <p>{schedule.teacher}</p>
                          <span>{schedule.vacancies}</span>
                        </div>
                      )}
                    </td>
                    <td>
                      {schedule.days.includes("Sab") && (
                        <div className={styles.cellContent}>
                          <HStack spacing="0.5">
                            <time>10:00 - 11:00</time>
                            <RiDeleteBack2Fill color="red" />
                          </HStack>
                          <p>{schedule.teacher}</p>
                          <span>{schedule.vacancies}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <HStack
              spacing="1"
              style={{ justifyContent: "flex-end", marginTop: "2rem" }}
            >
              <Link href="/modalities" passHref>
                <ButtonPrimary style={{ background: "gray" }}>
                  Cancelar
                </ButtonPrimary>
              </Link>
              <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
            </HStack>
          </form>
        </div>
      </div>
    </>
  );
}
