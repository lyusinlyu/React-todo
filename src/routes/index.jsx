import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import * as routeCodes from './routeCodes';

import Authenticated from "./guards/Authenticated";
import Guest from "./guards/Guest";

import LoginContainer from "containers/login";
import RegisterContainer from "containers/register";
import HomepageContainer from "containers/homepage";
import TodosListByDateContainer from "containers/todos-list-by-date";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ routeCodes.HOMEPAGE } element={ <Authenticated component={ HomepageContainer } /> } />
        <Route path={ routeCodes.TODOS_LIST_DATE } element={ <Authenticated component={ TodosListByDateContainer } /> } />
        <Route path={ routeCodes.LOGIN } element={ <Guest component={ LoginContainer } /> } />
        <Route path={ routeCodes.REGISTER } element={ <Guest component={ RegisterContainer } /> } />
      </Routes>
    </BrowserRouter>
  )
};

export { routeCodes };

export default AppRoutes;
