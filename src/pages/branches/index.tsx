import type { NextPage } from 'next';
import BranchTable from '../../components/BranchTable';
import SidebarMenu from '../../components/SidebarMenu';

const Branch: NextPage = () => {
   return (
      <div className="flexRow">
         <SidebarMenu />
         <BranchTable />
      </div>
   );
}

export default Branch;