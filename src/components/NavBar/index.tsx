import Link from 'next/link';

import ButtonPrimary from '../ButtonPrimary';

import style from './style.module.scss';
import logo from '../../../public/assets/LEON-logo.png';

export default function NavBar() {
   return (
      <nav className={style.menu}>
         
         <Link href="/">
            <a><img className={style.logo} src={logo.src} /></a>
         </Link>

         <div className={style.menuContainer}>
            <Link href="#"><a>Início</a></Link>
            <Link href="#"><a>Sobre</a></Link>
            <Link href="#"><a>Modalidades</a></Link>

            <div className={style.separator}></div>

            <Link href="#"><a><ButtonPrimary>Entrar</ButtonPrimary></a></Link>
            <Link href="#"><a className={style.register}>Cadastre-se</a></Link>
         </div>
      </nav>
   );
}