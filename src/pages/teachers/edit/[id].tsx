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
import { useEffect } from "react";

interface CreateTeacherFormData {
  name: string;
  address: string;
}

const updateTeacherSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  address: yup.string().required("Endereço obrigatório"),
});

export default function CreateTeacher() {
  const router = useRouter();

  const { id } = router.query;

  const { update, findOne } = useTeachers();

  const teacher = findOne(Number(id));

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(updateTeacherSchema),
  });

  useEffect(() => {
    reset({
      name: teacher.name,
      address: teacher.address,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacher, reset]);

  const handleUpdateTeacher: SubmitHandler<CreateTeacherFormData> = async (
    data
  ) => {
    update({ id: Number(id), ...data });

    router.push("/teachers");
  };

  return (
    <>
      <div className="flexRow">
        <SidebarMenu />
        <div className={styles.content}>
          <form onSubmit={handleSubmit(handleUpdateTeacher)}>
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
