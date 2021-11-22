import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import UserInfo from '../../components/UserInfo';

const Info: NextPage = () => {
   return (
      <div className="flexRow">
         <SidebarMenu/>
         <UserInfo />
      </div>
   );
}

export default Info;