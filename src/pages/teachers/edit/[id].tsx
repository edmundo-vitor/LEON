import ButtonPrimary from "../../../components/ButtonPrimary";
import { FormInput } from "../../../components/FormInput";
import { HStack } from "../../../components/HStack";
import NavBar from "../../../components/NavBar";
import SidebarMenu from "../../../components/SidebarMenu";
import { Stack } from "../../../components/Stack";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useTeacher, useTeachers } from "../../../hooks/useTeachers";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import * as yup from "yup";
import { useEffect } from "react";
import { requestBackend } from "../../../utils/request";
import { queryClient } from "../../../utils/queryClient";
import { useMutation } from "react-query";

interface EditTeacherFormData {
  name: string;
  address: string;
  telephone: string;
}

const updateTeacherSchema = yup.object().shape({
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

  const { id } = router.query;

  const { data, isLoading, error } = useTeacher(String(id));

  const editTeacher = useMutation(
    async (teacher: EditTeacherFormData) => {
      const { data } = await requestBackend({
        method: "PUT",
        url: `/teachers/${id}`,
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

  const handleTeacherUpdate: SubmitHandler<EditTeacherFormData> = async (
    data
  ) => {
    await editTeacher.mutateAsync(data);

    router.push("/teachers");
  };

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(updateTeacherSchema),
  });

  useEffect(() => {
    if (!isLoading && !error) {
      reset({
        name: data.name,
        address: data.address,
        telephone: data.telephone,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, reset]);

  return (
    <>
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form onSubmit={handleSubmit(handleTeacherUpdate)}>
            <h2>Atualizar professor</h2>
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
              <ButtonPrimary type="submit">Editar</ButtonPrimary>
            </HStack>
          </form>
        </div>
      </div>
    </>
  );
}
