import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import logo from "../../../public/assets/LEON-logo.png";
import { AuthContext } from "../../AuthContext";
import ButtonPrimary from "../../components/ButtonPrimary";
import { FormInput } from "../../components/FormInput";
import { Stack } from "../../components/Stack";
import { getTokenData } from "../../utils/auth";
import { requestBackendLogin } from "../../utils/request";
import { saveAuthData } from "../../utils/storage";
import styles from "./styles.module.scss";

interface LoginData {
  enail: string;
  password: string;
}

type CredentialsDTO = {
  username: string;
  password: string;
};

const loginSchema = yup.object().shape({
  username: yup.string().email("Email inválido").required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export default function Login() {

  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setAuthContextData } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<LoginData> = (data) => {
    setTimeout(() => { }, 400);
  }

  function onSubmit(formData: CredentialsDTO) {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        })
        response.data.authenticationType === "manager" ?
          router.push("/news") :
          response.data.authenticationType === "user" ?
            router.push("/news/view") : null
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.rectangle} />
      <div className={styles.signInContainer}>
        <Image src={logo} alt="Logo" />
        <form onSubmit={handleSubmit(handleLogin)}>
          <Stack spacing="0.8">
            <FormInput
              labelText="Email"
              type="text"
              error={formState.errors.email?.message}
              {...register("email")}
              obrigatory
              onChange={e => setUsername(e.target.value)}
            />
            <FormInput
              labelText="Senha"
              type="password"
              error={formState.errors.password?.message}
              {...register("password")}
              onChange={e => setPassword(e.target.value)}
              obrigatory
            />
          </Stack>

          <ButtonPrimary type="submit"
            onClick={() => {
              onSubmit({"username": username, "password": password})
            }}
          >Logar</ButtonPrimary>
          <p>Esqueceu a senha?</p>
        </form>
      </div>
    </div>
  );
}