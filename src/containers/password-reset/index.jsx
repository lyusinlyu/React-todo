import React, { useState } from "react";
import ResetPassword from "views/reset-password";
import { resetPassword as resetPasswordRequest } from 'api/guest';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import { routeCodes } from "routes";
import Auth from 'helpers/Auth';
import { useDispatch } from "react-redux";
import { setSiteInited } from "state/main/mainSlice";
import { handleAxiosDefautError } from 'helpers/ErrorHandler';

const PasswordReset = () => {
  const params = useParams();
  const { token: tokenFromLocation } = params;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const handleSubmit = async (inputs) => {
    try {
      setIsRequestInProgress(true);
      const response = await resetPasswordRequest(tokenFromLocation, inputs);
      const { data: { token } } = response;
      Auth.setToken(token);
      toast.success(`Authenticated as ${ inputs.email }`, {
        autoClose: 2000,
      });
      setTimeout(() => {
        dispatch(setSiteInited(false));
        navigate(routeCodes.HOMEPAGE);
      }, 2200);
    } catch (error) {
      handleAxiosDefautError(error);
      setIsRequestInProgress(false);
    }
  };

  return (
    <ResetPassword
      onSubmit={ handleSubmit }
      isFormLoading={ isRequestInProgress }
    />
  )
};

export default PasswordReset;
