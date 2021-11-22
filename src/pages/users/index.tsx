import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import SidebarMenu from '../../components/SidebarMenu';
import UserSchedule from '../../components/UserSchedule';
import UserTable from '../../components/UserTable';
import { getAuthData } from '../../utils/storage';

const Users: NextPage = () => {
   const [isUser, setIsUser] = useState(false);

   useEffect(() => {
      typeof window !== 'undefined' ? getAuthData().authenticationType === "user" ?
         setIsUser(true) : setIsUser(false) : null
   }, [])

   return (
      <div className="flexRow">
         {isUser ?
            <UserSchedule />
            :
            <>
               <SidebarMenu />
               <UserTable userList={usersList} />
            </>
         }
      </div>
   );
}

export default Users;