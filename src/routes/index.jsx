import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import * as routeCodes from './routeCodes';

import LoginContainer from "containers/login";
import RegisterContainer from "containers/register";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ routeCodes.LOGIN } element={ <LoginContainer /> } />
        <Route path={ routeCodes.REGISTER } element={ <RegisterContainer /> } />
      </Routes>
    </BrowserRouter>
  )
};

export { routeCodes };

export default AppRoutes;
