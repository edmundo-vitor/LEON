import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import News from '../../../components/News';
import NewsForm from '../../../components/NewsForm';

const Action: NextPage = () => {

   const news = [{
      "id": 1,
      "manager": {
         "id": 1,
         "name": "João Silva"
      },
      "title": "Notícia grande sem foto",
      "description": "Haverá um grande evento em breve. Haverá um grande evento em breve.Haverá um grande evento em breve. Haverá um grande evento em breve.",
      "imageUrl": "",
      "date": "25-10-2021"
   },
   {
      "id": 2,
      "manager": {
         "id": 1,
         "name": "João Silva"
      },
      "title": "Notícia gigante",
      "description": "Haverá um grande evento em breve. Haverá um grande evento em breve.Haverá um grande evento em breve. Haverá um grande evento em breve.",
      "imageUrl": "https://blogpilates.com.br/wp-content/uploads/2016/02/Studio-de-Pilates-CAPA.png",
      "date": "25-10-2021"
   }, {
      "id": 3,
      "manager": {
         "id": 1,
         "name": "João Silva"
      },
      "title": "Notícia normal",
      "description": "Haverá um pequeno evento em breve.",
      "imageUrl": "https://blogpilates.com.br/wp-content/uploads/2016/02/Studio-de-Pilates-CAPA.png",
      "date": "25-10-2021"
   }, {
      "id": 4,
      "manager": {
         "id": 1,
         "name": "João Silva"
      },
      "title": "Notícia normal sem foto",
      "description": "Haverá um pequeno evento em breve.",
      "imageUrl": "",
      "date": "25-10-2021"
   }, {
      "id": 5,
      "manager": {
         "id": 1,
         "name": "João Silva"
      },
      "title": "Notícia normal com um título muito grande",
      "description": "Haverá um pequeno evento em breve.",
      "imageUrl": "https://blogpilates.com.br/wp-content/uploads/2016/02/Studio-de-Pilates-CAPA.png",
      "date": "25-10-2021"
   }]

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <NewsForm />
         )
      } else if (router.query.action === "view") {
         return (
            <News newsList={news} />
         )
      }
   }

   return (
      <>
         {renderAction()}
      </>
   );
}

export default Action;