import SidebarMenu from "../../components/SidebarMenu";
import NavBar from "../../components/NavBar";
import { AiFillDelete, AiFillEdit, AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./styles.module.scss";
import { HStack } from "../../components/HStack";
import ButtonPrimary from "../../components/ButtonPrimary";
import Link from "next/link";
import { useTeachers } from "../../hooks/useTeachers";

export default function Teachers() {
  const { teachers, remove } = useTeachers();

  return (
    <div className="flexRow">
      <SidebarMenu />
      <div className={styles.content}>
        <div className={styles.tableWrapper}>
          <div className={styles.buttonWrapper}>
            <Link href="/teachers/create" passHref>
              <a>
                <ButtonPrimary>+</ButtonPrimary>
              </a>
            </Link>
          </div>
          {teachers.length === 0 ? (
            <p>Nenhum professor cadastrado</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id}>
                    <td>{teacher.id}</td>
                    <td>{teacher.name}</td>
                    <td>{teacher.address}</td>
                    <td>
                      <HStack spacing="1" style={{ justifyContent: "center" }}>
                        <AiOutlineInfoCircle size="20" />
                        <Link href={`/teachers/edit/${teacher.id}`} passHref>
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
                          onClick={() => remove(teacher.id)}
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
