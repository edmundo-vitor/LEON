import style from './style.module.scss';

import facebookLogo from '../../../public/assets/social-medias/Facebook.png';
import instagramLogo from '../../../public/assets/social-medias/Instagram.png';
import twitterLogo from '../../../public/assets/social-medias/Twitter.png';

export default function Footer() {
   return (
      <footer className={style.footer}>
         <div className={style.infos}>

            <div className={style.socialMedias}>
               <strong>Redes sociais</strong>
               <div className={style.socialMediasImages}>
                  <a href="#"><img src={facebookLogo.src} /></a>
                  <a href="#"><img src={instagramLogo.src} /></a>
                  <a href="#"><img src={twitterLogo.src} /></a>
               </div>
            </div>

            <div className={style.address}>
               <strong>Visite-nos</strong>
               <p>Rua tal, 123, Mossoró - RN</p>
            </div>

            <div className={style.contact}>
               <strong>Contato</strong>
               <p>(84) 9 9999-9999</p>
               <p>contato@leon.com.br</p>
            </div>
         
         </div>

         <div className={style.copy}>
            <strong>&copy; 2021 - LEON</strong>
         </div>
        
      </footer>
   );
}