import ButtonPrimary from "../../../components/ButtonPrimary";
import { FormInput } from "../../../components/FormInput";
import { HStack } from "../../../components/HStack";
import NavBar from "../../../components/NavBar";
import SidebarMenu from "../../../components/SidebarMenu";
import { Stack } from "../../../components/Stack";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useTeachers } from "../../../hooks/useTeachers";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import * as yup from "yup";

interface CreateTeacherFormData {
  name: string;
  address: string;
}

const createTeacherSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  address: yup.string().required("Endereço obrigatório"),
});

export default function CreateTeacher() {
  const router = useRouter();

  const { create } = useTeachers();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createTeacherSchema),
  });

  const handleCreateTeacher: SubmitHandler<CreateTeacherFormData> = async (
    data
  ) => {
    create(data);

    router.push("/teachers");
  };

  return (
    <>
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form onSubmit={handleSubmit(handleCreateTeacher)}>
            <h2>Cadastrar novo professor </h2>
            <div className={styles.gridContainer}>
              <section>
                <Stack spacing="1">
                  <FormInput
                    labelText="Nome"
                    {...register("name")}
                    error={formState.errors.name?.message}
                    obrigatory
                  />
                  <FormInput
                    labelText="Endereço"
                    {...register("address")}
                    error={formState.errors.address?.message}
                    obrigatory
                  />
                </Stack>
              </section>
            </div>
            <HStack
              spacing="1"
              style={{ justifyContent: "flex-end", marginTop: "2rem" }}
            >
              <Link href="/teachers" passHref>
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
