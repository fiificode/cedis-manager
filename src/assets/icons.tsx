//React icons
import { BiSolidDashboard } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSavings } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { TbPresentationAnalytics } from "react-icons/tb";


// / icons
export const DashboardIcon = () => (
    <div>
      <BiSolidDashboard size={24} className="min-w-max" />
    </div>
  );

  export const IncomeIcon = () => (
    <div>
      <GiReceiveMoney size={24} className="min-w-max"/>
    </div>
  );

export const ExpenseIcon = () => (
    <div>
      <GiTakeMyMoney size={24} className="min-w-max"/>
    </div>
  );

export const SavingsIcon = () => (
    <div>
      <MdSavings size={24} className="min-w-max"/>
    </div>
  );
 export const InvestmentIcon = () => (
    <div>
      <RiStockFill size={24} className="min-w-max"/>
    </div>
  );

export const BudgetIcon = () => (
    <div>
      <GiNotebook size={24} className="min-w-max"/>
    </div>
  );
export const ReportIcon = () => (
    <div>
      <TbPresentationAnalytics size={24} className="min-w-max"/>
    </div>
  );

