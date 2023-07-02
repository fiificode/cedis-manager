import {  Outlet } from "react-router-dom";
import LoginScreen from "../pages/auth/login/main";

const userState = {
    userToken:"1345"
}

// type Props = {
//   userToken: UserToken;
//   redirectTo?: string;
// };

// const PrivateRoute = ({ userToken, redirectTo = LOGIN }: Props) => {
//   return userToken ? <Outlet /> : <Navigate to={redirectTo} replace />;
// };

// export default PrivateRoute;

const PrivateRoute = () => {
//   const {userState} = useAuthProvider();
  if(userState?.userToken) {
    return <Outlet />;
  }
  return <LoginScreen />
}

export default PrivateRoute;