import ButtonPrimary from "../../components/ButtonPrimary";
import { FormInput } from "../../components/FormInput";
import { Stack } from "../../components/Stack";
import styles from "./styles.module.scss";

// import logo from "../../../public/assets/LEON-logo.png";
// import Image from "next/image";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .required("Senha obrigatória"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "Senhas devem ser iguais"),
});

export default function Register() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister: SubmitHandler<RegisterData> = (data) => {};

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.rectangle} />

        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>Criar Conta</h1>
          <Stack spacing="1.5">
            <FormInput
              labelText="Nome"
              {...register("name")}
              error={formState.errors.name?.message}
              obrigatory
            />
            <FormInput
              labelText="Email"
              {...register("email")}
              error={formState.errors.email?.message}
              obrigatory
            />
            <FormInput
              labelText="Senha"
              type="password"
              {...register("password")}
              error={formState.errors.password?.message}
              obrigatory
            />
            <FormInput
              labelText="Confirme a senha"
              type="password"
              {...register("passwordConfirmation")}
              error={formState.errors.passwordConfirmation?.message}
              obrigatory
            />
          </Stack>

          <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        </form>
      </div>
    </div>
  );
}
