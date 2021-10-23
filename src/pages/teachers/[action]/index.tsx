import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import TeacherForm from '../../../components/TeacherForm';

const Action: NextPage = () => {

   const router = useRouter()

   return (
      <div>
         {router.query.action === "register" ?
            <TeacherForm /> :
            <div>Tela qualquer</div>}
      </div>
   );
}

export default Action;