import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import ScheduleForm from '../../../components/ScheduleForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "edit") {
         return (
            <ScheduleForm scheduleId={router.query.index} isForEditing />
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