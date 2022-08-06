import { toast } from "react-toastify";

export const handleAxiosDefautError = (error) => {
  if(error.response && error.response.status) {
    switch (error.response.status) {
      case 401 : {
        toast.error('Invalid credentials');
        break;
      }
      case 422 : {
        const errors = error.response.data.errors;
        Object.keys(errors).forEach(key => {
          toast.error(errors[key][0]);
        });
        break;
      }
      default: {
        toast.error('Something went wrong');
      }
    }
  } else {
    toast.error('Something went wrong');
  }
};
