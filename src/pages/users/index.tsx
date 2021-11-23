import type { NextPage } from 'next';

import { useEffect, useState } from 'react';
import SidebarMenu from '../../components/SidebarMenu';
import UserSchedule from '../../components/UserSchedule';
import UserTable from '../../components/UserTable';
import { getAuthData } from '../../utils/storage';

import { User } from '../../models/User';

const Users: NextPage = () => {
   const [isUser, setIsUser] = useState(false);
   const [usersList, setUsersList] = useState<User[]>([]);

   useEffect(() => {
      typeof window !== 'undefined' ? getAuthData().authenticationType === "user" ?
         setIsUser(false) : setIsUser(false) : null

   }, []);

   return (
      <div className="flexRow">
         {isUser ?
            <UserSchedule />
            :
            <>
               <SidebarMenu />
               <UserTable />
            </>
         }
      </div>
   );
}

export default Users;