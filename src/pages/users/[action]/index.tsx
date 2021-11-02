import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import UserForm from '../../../components/UserForm';
import SidebarMenu from '../../../components/SidebarMenu'; 

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <div className="flexRow">
               <SidebarMenu />
               <UserForm />
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