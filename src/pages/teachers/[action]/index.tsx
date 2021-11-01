import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import TeacherForm from '../../../components/TeacherForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <TeacherForm />
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