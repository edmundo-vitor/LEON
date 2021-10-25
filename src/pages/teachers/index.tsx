import type { NextPage } from 'next';
import TeacherTable from '../../components/TeacherTable';


const Teacher: NextPage = () => {

   const teachers = [{
      "id": 4,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 5,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 6,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 7,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 8,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 9,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 10,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 11,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 12,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 13,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }, {
      "id": 14,
      "name": "Mais algum nome",
      "address": "Estúdio 1 - Rua tal"
   }]

   return (
      <div>
         <TeacherTable teachersList={teachers} />
      </div>
   );
}

export default Teacher;