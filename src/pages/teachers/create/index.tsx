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
import { useMutation } from "react-query";
import { requestBackend } from "../../../utils/request";
import { queryClient } from "../../../utils/queryClient";

interface CreateTeacherFormData {
  name: string;
  address: string;
  telephone: string;
}

const createTeacherSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  address: yup.string().required("Endereço obrigatório"),
  telephone: yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Número de telefone inválido"
    )
    .required("Telefone obrigatório"),
});

export default function CreateTeacher() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createTeacherSchema),
  });

  const createTeacherMutaton = useMutation(
    async (teacher: CreateTeacherFormData) => {
      const { data } = await requestBackend({
        method: "POST",
        url: "/teachers",
        data: teacher,
      });

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("teachers");
      },
    }
  );

  const handleTeacherCreation: SubmitHandler<CreateTeacherFormData> = async (
    data
  ) => {
    await createTeacherMutaton.mutateAsync(data);

    router.push("/teachers");
  };

  return (
    <>
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form onSubmit={handleSubmit(handleTeacherCreation)}>
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
                  <FormInput
                    labelText="Telefone"
                    {...register("telephone")}
                    error={formState.errors.telephone?.message}
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
