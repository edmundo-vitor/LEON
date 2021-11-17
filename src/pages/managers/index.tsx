import type { NextPage } from 'next';
import ManagerTable from '../../components/ManagerTable';
import SidebarMenu from '../../components/SidebarMenu';

const Managers: NextPage = () => {

   return (
      <div className="flexRow">
         <SidebarMenu />
         <ManagerTable />
      </div>
   );
}

export default Managers;