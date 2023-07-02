import {
  BudgetIcon,
  DashboardIcon,
  ExpenseIcon,
  IncomeIcon,
  InvestmentIcon,
  ReportIcon,
  SavingsIcon,
} from "../../assets/icons";
import {
  APP_ANALYSIS,
  APP_BUDGET,
  APP_EXPENSES,
  APP_INCOMES,
  APP_INVESTMENT,
  APP_INVESTMENT_CRYPTO,
  APP_INVESTMENT_STOCKS,
  APP_SAVINGS,
  APP_SAVINGS_BANK,
  APP_SAVINGS_OTHERS,
  LANDING,
} from "../../navigation/routes-constants";

// Side Bar Navigation Items
export const sideNavigationItems = [
  {
    name: "Dashboard",
    href: LANDING,
    icon: DashboardIcon,
    current: true,
  },
  {
    name: "Incomes",
    href: APP_INCOMES,
    icon: IncomeIcon,
  },
  {
    name: "Expenses",
    href: APP_EXPENSES,
    icon: ExpenseIcon,
  },
  {
    name: "Savings",
    href: APP_SAVINGS,
    icon: SavingsIcon,
    subNavigation: [
      {
        name: "Bank savings",
        href: APP_SAVINGS_BANK,
      },
      {
        name: "Achieve",
        href: APP_SAVINGS_OTHERS,
      },
    ],
  },
  {
    name: "Investments",
    href: APP_INVESTMENT,
    icon: InvestmentIcon,
    subNavigation: [
      {
        name: "stocks",
        href: APP_INVESTMENT_STOCKS,
      },
      {
        name: "crypto",
        href: APP_INVESTMENT_CRYPTO,
      },
    ],
  },
  {
    name: "Budget planner",
    href: APP_BUDGET,
    icon: BudgetIcon,
  },
  {
    name: "Analysis",
    href: APP_ANALYSIS,
    icon: ReportIcon,
  },
];
