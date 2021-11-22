import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../../../public/assets/LEON-logo.png';
import { getAuthData } from '../../utils/storage';
import ButtonPrimary from '../ButtonPrimary';
import style from './style.module.scss';

export default function NavBar() {
   const router = useRouter();
   const [isUser, setIsUser] = useState(false);
   const [managerId, setManagerId] = useState(0);

   useEffect(() => {
      typeof window !== 'undefined' ? getAuthData().authenticationType === "user" ?
         setIsUser(true) : setIsUser(false) : null

      typeof window !== 'undefined' ? setManagerId(getAuthData().managerId) : null
   }, [])

   return (
      <nav className={style.menu}>

         <Link href="/">
            <a><img className={style.logo} src={logo.src} /></a>
         </Link>

         {router.pathname === "/" ?
            <div className={style.menuContainer}>
               <Link href="/"><a>Início</a></Link>
               <Link href="/about"><a>Sobre</a></Link>
               <Link href="#"><a>Modalidades</a></Link>

               <div className={style.separator}></div>

               <Link href="/login"><a><ButtonPrimary>Entrar</ButtonPrimary></a></Link>
               <Link href="/register"><a className={style.register}>Cadastre-se</a></Link>
            </div>
            :
            isUser ?
               <div className={style.menuContainer}>
                  <Link href="/news/view"><a className={router.asPath.startsWith("/news/view") ? "activeMenu" : ""}>Notícias</a></Link>
                  <Link href="/users/schedule" ><a className={router.asPath.startsWith("/users/schedule") ? "activeMenu" : ""}>Agenda</a></Link>
                  <Link href="#"><a>Modalidades</a></Link>
                  <div className={style.separator}></div>

                  <Link href="/users/info"><a>
                     <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                     </svg>
                  </a></Link>
               </div>
               :
               <div className={style.menuContainer}>
                  <Link href="/"><a className={router.asPath.startsWith("/") ? "activeMenu" : ""}>Página inicial</a></Link>
                  <Link href="/about" ><a className={router.asPath.startsWith("/about") ? "activeMenu" : ""}>Sobre</a></Link>

                  <div className={style.separator}></div>

                  <Link href={"/managers/edit/" + managerId}><a>
                     <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                     </svg>
                  </a></Link>
               </div>
         }
      </nav>
   );
}