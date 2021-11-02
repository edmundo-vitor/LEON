import SidebarMenu from "../../components/SidebarMenu";
import NavBar from "../../components/NavBar";
import { AiFillDelete, AiFillEdit, AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./styles.module.scss";
import { HStack } from "../../components/HStack";
import ButtonPrimary from "../../components/ButtonPrimary";
import Link from "next/link";
import { useModalities } from "../../hooks/useModalities";

export default function Modalities() {
  const { modalities, removeModality } = useModalities();

  return (
    <>
      <NavBar />
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <div className={styles.tableWrapper}>
            <div className={styles.buttonWrapper}>
              <Link href="/modalities/create" passHref>
                <ButtonPrimary>+</ButtonPrimary>
              </Link>
            </div>
            {modalities.length === 0 ? (
              <p>Nenhuma modalidade cadastrada</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {modalities.map((modality) => (
                    <tr key={modality.id}>
                      <td>{modality.name}</td>
                      <td>{modality.description}</td>
                      <td>
                        <HStack spacing="1">
                          <AiOutlineInfoCircle size="20" />
                          <AiFillEdit size="20" color="gray" />
                          <AiFillDelete
                            style={{ cursor: "pointer" }}
                            size="20"
                            color="red"
                            onClick={() => removeModality(modality.id)}
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
    </>
  );
}
