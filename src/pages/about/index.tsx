import type { NextPage } from 'next';
import style from './style.module.scss';


const About: NextPage = () => {
   return (
      <div className={style.container}>
         <h1>Sobre o LEON</h1>
         <p>Somos um sistema de agendamento de estúdos de pilates/academia(s)</p>

         <div className={style.cardContainer}>
            <div className={style.card}>
               <h1>O que fazemos?</h1>
               <p>Gerenciamos estúdios de puilates/academia(s), gerando conforto e praticidade tanto para os donos de estúdios/academias quanto para os clientes.</p>
            </div>

            <div className={style.card}>
               <h1>Como se associar?</h1>
               <p>Para ser cliente basta clicar no botão CADASTRE-SE no canto superior direito.</p>
            </div>
         </div>
         
      </div>
   );
}

export default About;