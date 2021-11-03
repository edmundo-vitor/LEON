import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

import PlanForm from '../../../components/PlanForm';
import SidebarMenu from '../../../components/SidebarMenu'; 

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <div className="flexRow">
               <SidebarMenu />
               <PlanForm />
            </div>
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