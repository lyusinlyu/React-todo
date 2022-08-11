import ForgotPassword from "../../views/forgot-password";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword as forgotPasswordRequest } from "../../api/guest";
import { toast } from "react-toastify";
import { setSiteInited } from "../../state/main/mainSlice";
import { handleAxiosDefautError } from "../../helpers/ErrorHandler";

const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const handleSubmit = async (inputs) => {
    try {
      setIsRequestInProgress(true);
      const response = await forgotPasswordRequest(inputs);
      const { data: { message } } = response;

      toast.success(`${ message }`, {
        autoClose: 2000,
      });

      setTimeout(() => {
        dispatch(setSiteInited(false));
        setIsRequestInProgress(false);
      }, 2200);
    } catch (error) {
      handleAxiosDefautError(error);
      setIsRequestInProgress(false);
    }
  };

  return (
    <ForgotPassword
      onSubmit={ handleSubmit }
      isFormLoading={ isRequestInProgress }
    />
  )
}

export default ForgotPasswordContainer
