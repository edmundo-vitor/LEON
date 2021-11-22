import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import UserPlan from '../../components/UserPlan';

const Plan: NextPage = () => {
   return (
      <div className="flexRow">
         <SidebarMenu />
         <UserPlan />
      </div>
   );
}

export default Plan;