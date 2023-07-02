import * as React from "react";
import {
LANDING,
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
LOGIN,
} from "./routes-constants";
import { Routes, Route } from "react-router-dom";
import { ModalLoader } from "../shared/Loader";
import PrivateRoute from "./private-route";


//lazy imports for Auth pages
const LoginScreen = React.lazy(() => import("../pages/auth/login"))

//lazy imports for apps pages
const DashboardScreen = React.lazy(() => import("../pages/dashboard"));
const Expenses = React.lazy(() => import("../pages/expenses"));
const Incomes = React.lazy(() => import("../pages/incomes"));
const Investments = React.lazy(() => import("../pages/investments"));
const Budget = React.lazy(() => import("../pages/budget"));

const Crypto = React.lazy(
  () => import("../pages/investments/crypto/crypto")
);
const Stocks = React.lazy(
  () => import("../pages/investments/stocks/stocks")
);
const Savings = React.lazy(
  () => import("../pages/savings")
);
const BankSavings = React.lazy(
  () => import("../pages/savings/bank/bank")
);
const OtherSavings = React.lazy(
  () => import("../pages/savings/others/others")
);

const Report = React.lazy(() => import("../pages/report"));

const RouterConfig = () => {

  return (
    <React.Fragment>
      <React.Suspense fallback={ModalLoader()}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={LANDING} element={<DashboardScreen />} />
            <Route index element={<DashboardScreen />} />
            <Route
              path={APP_INCOMES}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Incomes />
                </React.Suspense>
              }
            />
            <Route
              path={APP_EXPENSES}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Expenses />
                </React.Suspense>
              }
            />
            <Route
              path={APP_SAVINGS}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Savings />
                </React.Suspense>
              }
            />
            <Route
              path={APP_SAVINGS_BANK}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <BankSavings />
                </React.Suspense>
              }
            />
            <Route
              path={APP_SAVINGS_OTHERS}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <OtherSavings />
                </React.Suspense>
              }
            />
            <Route
              path={APP_INVESTMENT}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Investments />
                </React.Suspense>
              }
            />
             <Route
              path={APP_INVESTMENT_CRYPTO}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Crypto />
                </React.Suspense>
              }
            />
            <Route
              path={APP_INVESTMENT_STOCKS}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Stocks />
                </React.Suspense>
              }
            />
            <Route
              path={APP_BUDGET}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Budget />
                </React.Suspense>
              }
            />
            <Route
              path={APP_ANALYSIS}
              element={
                <React.Suspense fallback={<ModalLoader />}>
                  <Report />
                </React.Suspense>
              }
            />
          </Route>
          <Route path={LOGIN} element={<LoginScreen />} />
        </Routes>
      </React.Suspense>
    </React.Fragment>
  );
};
export default RouterConfig;
