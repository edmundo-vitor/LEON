import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { useMutation } from "react-query";
import ButtonPrimary from "../../../components/ButtonPrimary";
import SidebarMenu from "../../../components/SidebarMenu";
import { useModalities, useModality } from "../../../hooks/useModalities";
import { useSchedulesFromModality } from "../../../hooks/useSchedules";
import { queryClient } from "../../../utils/queryClient";
import { requestBackend } from "../../../utils/request";

import styles from "./styles.module.scss";

export default function ModalitySchedules() {
  const router = useRouter();

  const { id } = router.query;  

  const { data: modality } = useModality(Number(id));

  const { data, isLoading, error } = useSchedulesFromModality(Number(id));

  const deleteScheduleMutation = useMutation(
    async (id: string) => {
      await requestBackend({ method: "DELETE", url: `/schedules/${id}` });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("schedules");
      },
    }
  );

  async function handleScheduleRemoval(id: string) {
    await deleteScheduleMutation.mutateAsync(id);
  }

  return (
    <div className="flexRow">
      <SidebarMenu />
      <div className={styles.content}>
        <p>
          Horários da modalidade{" "}
          <span style={{ fontWeight: "bold" }}>{modality?.name}</span>
        </p>
        <div className={styles.tableWrapper}>
          {isLoading ? (
            <p>Carregando os dados...</p>
          ) : error ? (
            <p>Falha na recuparação dos dados.</p>
          ) : data.length === 0 ? (
            <p>Nenhum horário cadastrado para essa modalidade.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Data início</th>
                  <th>Data fim</th>
                  <th>Total de vagas</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((schedule) => (
                  <tr key={schedule.id}>
                    <td>{schedule.id}</td>
                    <td>{schedule.startDate}</td>
                    <td>{schedule.endDate}</td>
                    <td>{schedule.maxUsers}</td>
                    <td>
                      <AiFillDelete
                        style={{ cursor: "pointer" }}
                        size="20"
                        color="red"
                        onClick={() => handleScheduleRemoval(schedule.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
