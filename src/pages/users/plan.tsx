import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import UserPlan from '../../components/UserPlan';
import { isUser } from '../../models/User';

const Plan: NextPage = () => {
   return (
      <div className="flexRow">
         <SidebarMenu isUser={isUser} />
         <UserPlan />
      </div>
   );
}

export default Plan;