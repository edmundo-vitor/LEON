import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import UserForm from '../../../components/UserForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "edit") {
         return (
            <UserForm userId={router.query.id.toString()} isForEditing/>
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