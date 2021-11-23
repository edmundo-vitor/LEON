import SidebarMenu from "../../components/SidebarMenu";
import { AiFillDelete, AiFillEdit, AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./styles.module.scss";
import { HStack } from "../../components/HStack";
import ButtonPrimary from "../../components/ButtonPrimary";
import Link from "next/link";
import { prefetchModality, useModalities } from "../../hooks/useModalities";
import { requestBackend } from "../../utils/request";
import { queryClient } from "../../utils/queryClient";
import { useMutation } from "react-query";

export default function Modalities() {
  const { data, isLoading, error } = useModalities();

  const deleteModalityMutation = useMutation(
    async (id: number) => {
      await requestBackend({ method: "DELETE", url: `/modalities/${id}` });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("modalities");
      },
    }
  );

  async function handleMutationRemoval(id: number) {
    await deleteModalityMutation.mutateAsync(id);
  }

  return (
    <div className="flexRow">
      <SidebarMenu />
      <div className={styles.content}>
        <div className={styles.tableWrapper}>
          <div className={styles.buttonWrapper}>
            <Link href="/modalities/create" passHref>
              <a>
                <ButtonPrimary>+</ButtonPrimary>
              </a>
            </Link>
          </div>
          {isLoading ? (
            <p>Carregando os dados...</p>
          ) : error ? (
            <p>Falha na recuparação dos dados.</p>
          ) : data.length === 0 ? (
            <p>Nenhuma modalidade castrada</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((modality) => (
                  <tr
                    key={modality.id}
                    onMouseEnter={() => prefetchModality(modality.id)}
                  >
                    <td>{modality.id}</td>
                    <td>{modality.name}</td>
                    <td>
                      <HStack spacing="1" style={{ justifyContent: "center" }}>
                        <Link
                          href={`/modalities/schedules/${modality.id}`}
                          passHref
                        >
                          <a>
                            <AiOutlineInfoCircle size="20" />
                          </a>
                        </Link>
                        <Link href={`/modalities/edit/${modality.id}`} passHref>
                          <a>
                            <AiFillEdit
                              style={{ cursor: "pointer" }}
                              size="20"
                              color="gray"
                            />
                          </a>
                        </Link>
                        <AiFillDelete
                          style={{ cursor: "pointer" }}
                          size="20"
                          color="red"
                          onClick={() => handleMutationRemoval(modality.id)}
                        />
                      </HStack>
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
