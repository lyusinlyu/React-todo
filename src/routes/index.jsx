import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import * as routeCodes from './routeCodes';
import suspenser from "hoc/Suspenser";

import Authenticated from "./guards/Authenticated";
import Guest from "./guards/Guest";

const HomepageContainer = lazy(() => import('containers/homepage'));
const LoginContainer = lazy(() => import('containers/login'));
const RegisterContainer = lazy(() => import('containers/register'));
const TodosListByDateContainer = lazy(() => import('containers/todos-list-by-date'));
const ForgotPasswordContainer = lazy(() => import('containers/forgot-password'));
const PasswordResetContainer = lazy(() => import('containers/password-reset'));



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ routeCodes.HOMEPAGE } element={ <Authenticated component={ suspenser(HomepageContainer) } /> } />
        <Route path={ routeCodes.TODOS_LIST_DATE } element={ <Authenticated component={ suspenser(TodosListByDateContainer) } /> } />
        <Route path={ routeCodes.LOGIN } element={ <Guest component={ suspenser(LoginContainer) } /> } />
        <Route path={ routeCodes.REGISTER } element={ <Guest component={ suspenser(RegisterContainer) } /> } />
        <Route path={ routeCodes.FORGOT_PASSWORD } element={ <Guest component={ suspenser(ForgotPasswordContainer) } /> } />
        <Route path={ routeCodes.PASSWORD_RESET } element={ <Guest component={ suspenser(PasswordResetContainer) } /> } />
      </Routes>
    </BrowserRouter>
  )
};

export { routeCodes };

export default AppRoutes;
