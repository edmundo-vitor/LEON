import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import TeacherForm from '../../../components/TeacherForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "edit") {
         return (
            <TeacherForm teacherId={router.query.index} isForEditing/>
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