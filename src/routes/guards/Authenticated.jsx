import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initSite } from 'state/main/mainSlice';
import { useNavigate } from 'react-router-dom';
import { routeCodes } from 'routes';
import { PropTypes } from 'prop-types';
import Auth from 'helpers/Auth';

const Authenticated = ({
  component: ChildComponent,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mainState = useSelector((state) => state.main);
  const { isSiteInited, authUser } = mainState;

  useEffect(() => {
    if(!isSiteInited) {
      dispatch(initSite());
    }
  }, []);

  useEffect(() => {
    if(isSiteInited && !authUser) {
      navigate(routeCodes.LOGIN);
    }
  }, [isSiteInited, authUser]);

  if(isSiteInited && authUser) {
    return (
      <>
        <button
          onClick={ () => {
            Auth.deleteToken();
            window.location.reload();
          } }
        >
          Logout
        </button>
        <ChildComponent />
      </>
    )
  }
  return null;
};

Authenticated.propTypes = {
  component: PropTypes.func,
};

export default Authenticated;
