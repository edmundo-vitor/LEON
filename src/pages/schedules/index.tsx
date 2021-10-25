import type { NextPage } from 'next';
import ScheduleTable from '../../components/ScheduleTable';


const Schedule: NextPage = () => {

   const schedules = [{
      "id": 4,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 5,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 6,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 7,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 8,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 9,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 10,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 11,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 12,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   }, {
      "id": 13,
      "modality": {
         "id": 1,
         "name": "Pilates"
      }, "branch": {
         "id": 1,
         "name": "Filial Mossoró"
      }, "teacher": {
         "id": 1,
         "name": "Maria da Silva"
      },
      "scheduleStart": "07:00",
      "scheduleEnd": "09:00",
      "maxUsers": 5
   },]

   return (
      <div>
         <ScheduleTable schedulesList={schedules} />
      </div>
   );
}

export default Schedule;