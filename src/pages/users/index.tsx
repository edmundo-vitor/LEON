import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import UserTable from '../../components/UserTable';

import { usersList } from '../../models/User';

const Users: NextPage = () => {

   return (
      <div className="flexRow">
         <SidebarMenu />
         <UserTable userList={usersList} />
      </div>
   );
}

export default Users;