import Image from "next/image";
import ButtonPrimary from "../../components/ButtonPrimary";
import styles from "./styles.module.scss";

import logo from "../../../public/assets/LEON-logo.png";
import { FormInput } from "../../components/FormInput";
import { Stack } from "../../components/Stack";

import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Login() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<LoginData> = (data) => {
    setTimeout(() => {}, 400);
  } 

  return (
    <div className={styles.gridContainer}>
      <div className={styles.rectangle} />
      <div className={styles.signInContainer}>
        <Image src={logo} alt="Logo" />
        <form onSubmit={handleSubmit(handleLogin)}>
          <Stack spacing="0.8">
            <FormInput
              labelText="Email"
              error={formState.errors.email?.message}
              {...register("email")}
              obrigatory
            />
            <FormInput
              type="password"
              labelText="Senha"
              error={formState.errors.password?.message}
              {...register("password")}
              obrigatory
            />
          </Stack>

          <ButtonPrimary type="submit">Logar</ButtonPrimary>
          <p>Esqueceu a senha?</p>
        </form>
      </div>
    </div>
  );
}
