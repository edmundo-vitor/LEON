import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import NewsForm from '../../../components/NewsForm';
import NewsView from '../../../components/NewsView';

const Action: NextPage = () => {

   const router = useRouter()

   function renderAction() {
      if (router.query.action === "register") {
         return (
            <NewsForm />
         )
      } else if (router.query.action === "view") {
         return (
            <NewsView />
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