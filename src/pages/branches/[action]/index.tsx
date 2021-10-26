import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import BranchForm from '../../../components/BranchForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <BranchForm />
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