import ButtonPrimary from "../../../components/ButtonPrimary";
import { FormInput } from "../../../components/FormInput";
import { HStack } from "../../../components/HStack";
import NavBar from "../../../components/NavBar";
import SidebarMenu from "../../../components/SidebarMenu";
import { Stack } from "../../../components/Stack";
import { RiDeleteBack2Fill } from "react-icons/ri";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function CreateModality() {
  // const [numberOfFiles, setNumberOfFiles] = useState(1);

  return (
    <>
      <NavBar />
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form>
            <h2>Cadastrar nova Modalidade</h2>
            <div className={styles.gridContainer}>
              <section>
                <Stack spacing="1">
                  <FormInput labelText="Nome" obrigatory />
                  <FormInput labelText="Descrição" obrigatory />
                  <h3>Cadastrar horário</h3>
                  <div className={styles.schedule}>
                    <Stack>
                      <HStack>
                        <FormInput
                          labelText="Início"
                          type="time"
                          obrigatory
                          style={{ width: "fit-content" }}
                        />
                        <FormInput
                          labelText="Fim"
                          type="time"
                          obrigatory
                          style={{ width: "fit-content" }}
                        />
                        <FormInput
                          labelText="Vagas"
                          obrigatory
                          style={{ width: "100px" }}
                        />
                        <FormInput
                          labelText="Professor"
                          obrigatory
                          placeholder="Pesquise o professor pelo nome"
                        />
                      </HStack>
                      <div className={styles.days}>
                        <HStack spacing="1">
                          <ButtonPrimary type="button">Seg</ButtonPrimary>
                          <ButtonPrimary type="button">Ter</ButtonPrimary>
                          <ButtonPrimary type="button">Qua</ButtonPrimary>
                          <ButtonPrimary type="button">Qui</ButtonPrimary>
                          <ButtonPrimary type="button">Sex</ButtonPrimary>
                          <ButtonPrimary type="button">Sab</ButtonPrimary>
                        </HStack>
                        <ButtonPrimary type="button">+</ButtonPrimary>
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
                <tr>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                  <td>
                    <div className={styles.cellContent}>
                      <HStack spacing="0.5">
                        <time>10:00 - 11:00</time>
                        <RiDeleteBack2Fill color="red" />
                      </HStack>
                      <p>João Gomes</p>
                      <span>11 vagas</span>
                    </div>
                  </td>
                </tr>
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
