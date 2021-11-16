import type { NextPage } from 'next';
import NewsTable from '../../components/NewsTable';
import SidebarMenu from '../../components/SidebarMenu';

const NewsPage: NextPage = () => {
   return (
      <div className="flexRow">
         <SidebarMenu />
         <NewsTable/>
      </div>
   );
}

export default NewsPage;