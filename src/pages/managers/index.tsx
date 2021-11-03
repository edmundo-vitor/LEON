import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import ManagerTable from '../../components/ManagerTable';

import { managersList } from '../../models/Manager';

const Managers: NextPage = () => {

   return (
      <div className="flexRow">
         <SidebarMenu />
         <ManagerTable managerList={managersList} />
      </div>
   );
}

export default Managers;