import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export default function SidebarMenu() {
  const router = useRouter();

  return (
    <div className={style.sidebarMenu}>
      <Link href="/modalities">
        <a
          className={
            router.asPath.startsWith("/modalities") ? "activeMenu" : ""
          }
        >
          Modalidades
        </a>
      </Link>
      <Link href="/branches">
        <a className={router.asPath == "/branches" ? "activeMenu" : ""}>
          Filiais
        </a>
      </Link>
      <Link href="#">
        <a>Planos</a>
      </Link>
      <Link href="#">
        <a>Secretários</a>
      </Link>
      <Link href="#">
        <a>Usuários</a>
      </Link>
      <Link href="/teachers">
        <a className={router.asPath == "/teachers" ? "activeMenu" : ""}>
          Professores
        </a>
      </Link>
    </div>
  );
}
