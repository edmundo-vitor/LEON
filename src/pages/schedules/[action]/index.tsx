import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import ScheduleForm from '../../../components/ScheduleForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <ScheduleForm />
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