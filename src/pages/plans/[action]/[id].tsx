import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import PlanForm from '../../../components/PlanForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "edit") {
         return (
            <PlanForm planId={router.query.id.toString()} isForEditing/>
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