import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import style from "./style.module.scss";

export default function SidebarMenu(props) {

   const router = useRouter();

   return (
      <div className={style.sidebarMenu}>
         {props.isUser ?
            <>
               <Link href="/users/info"><a className={router.asPath.startsWith("/users/info") ? "activeMenu" : ""}>Informações</a></Link>
               <Link href="/users/plan"><a className={router.asPath.startsWith("/users/plan") ? "activeMenu" : ""}>Meu plano</a></Link>
            </>
            :
            <>
               <Link href="/modalities"><a className=className={router.asPath.startsWith("/modalities") ? "activeMenu" : ""}>Modalidades</a></Link>
               <Link href="/branches"><a className={router.asPath.startsWith("/branches") ? "activeMenu" : ""}>Filiais</a></Link>
               <Link href="/news"><a className={router.asPath.startsWith("/news") ? "activeMenu" : ""}>Notícias</a></Link>
               <Link href="/plans"><a className={router.asPath.startsWith("/plans") ? "activeMenu" : ""}>Planos</a></Link>
               <Link href="/managers"><a className={router.asPath.startsWith("/managers") ? "activeMenu" : ""}>Secretários</a></Link>
               <Link href="/users"><a className={router.asPath.startsWith("/users") ? "activeMenu" : ""}>Usuários</a></Link>
               <Link href="/teachers"><a className={router.asPath.startsWith("/teachers") ? "activeMenu" : ""}>Professores</a></Link>
            </>
         }
      </div>
   )
}