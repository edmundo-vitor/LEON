import type { NextPage } from 'next';
import { useState } from 'react';
import NewsTable from '../../components/NewsTable';
import SidebarMenu from '../../components/SidebarMenu';

const NewsPage: NextPage = () => {

   const [news, setNews] = useState([{
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
   }])

   return (
      <div className="flexRow">
         <SidebarMenu />
         <NewsTable newsList={news} setNewsList={setNews}/>
      </div>
   );
}

export default NewsPage;