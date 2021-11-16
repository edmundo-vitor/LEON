import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import NewsForm from '../../../components/NewsForm';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "edit") {
         return (
            <NewsForm isForEditing/>
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