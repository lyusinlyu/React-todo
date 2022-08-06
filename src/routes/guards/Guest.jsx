import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initSite } from 'state/main/mainSlice';
import { useNavigate } from 'react-router-dom';
import { routeCodes } from 'routes';
import { PropTypes } from 'prop-types';

const Guest = ({
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
    if(isSiteInited && authUser) {
      navigate(routeCodes.HOMEPAGE);
    }
  }, [isSiteInited, authUser]);

  if(isSiteInited && !authUser) {
    return (
      <ChildComponent />
    )
  }
  return null;
};

Guest.propTypes = {
  component: PropTypes.func,
};

export default Guest;
