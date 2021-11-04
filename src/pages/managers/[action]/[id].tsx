import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import ManagerForm from '../../../components/ManagerForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "edit") {
         return (
            <ManagerForm managerId={router.query.id.toString()} isForEditing/>
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