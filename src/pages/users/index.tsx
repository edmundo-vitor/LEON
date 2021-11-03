import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import UserSchedule from '../../components/UserSchedule';
import UserTable from '../../components/UserTable';
import { isUser, usersList } from '../../models/User';


const Users: NextPage = () => {

   return (
      <div className="flexRow">
         {isUser ?
            <UserSchedule />
            :
            <>
               <SidebarMenu isUser={isUser} />
               <UserTable userList={usersList} />
            </>
         }
      </div>
   );
}

export default Users;