import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import UserInfo from '../../components/UserInfo';
import { isUser } from '../../models/User';

const Info: NextPage = () => {
   return (
      <div className="flexRow">
         <SidebarMenu isUser={isUser} />
         <UserInfo />
      </div>
   );
}

export default Info;