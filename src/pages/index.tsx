import type { NextPage } from 'next';
import ButtonPrimary from '../components/ButtonPrimary';

import style from '../../styles/index.module.scss';
import pilatesImage from '../../public/assets/pilates.png';


const Home: NextPage = () => {
   return (
      <div className={style.contentContainer}>

         <div className={style.announcement}>
            <div className={style.textAnnouncement}>
               <div>
                  <a href="#"><ButtonPrimary>Agende</ButtonPrimary></a>
                  <h2>já a sua</h2>
               </div>
               
               <div>
                  <h1>aula experimental!</h1>
               </div>
            </div>
            <img src={pilatesImage.src} />
         </div>

         <div>
            
         </div>

      </div>     
   );
}

export default Home;