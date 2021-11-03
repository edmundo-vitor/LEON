import type { NextPage } from 'next';
import SidebarMenu from '../../components/SidebarMenu';
import PlanTable from '../../components/PlanTable';

import { plansList } from '../../models/Plan';

const Plans: NextPage = () => {

   return (
      <div className="flexRow">
         <SidebarMenu />
         <PlanTable planList={plansList} />
      </div>
   );
}

export default Plans;