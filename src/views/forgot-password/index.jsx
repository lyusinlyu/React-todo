import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import './index.css';

const ForgotPassword = ({ isFormLoading, onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    setEmail(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isFormLoading) {
      return;
    }
    onSubmit({
      email,
    });
  }


  const submitButtonClasses = classNames(
    'mt-7',
    'todo-button',
    {
      'bg-blue-primary': !isFormLoading,
      'bg-blue-primary/60': isFormLoading,
    }
  );

  return (
    <div className='todo-app auth'>
      <form onSubmit={ handleSubmit } className='text-left'>
        <p className='text-left text-black-plain font-semibold mb-1.5'>
          Password reset form
        </p>
        <p className='text-sm text-gray-plain'>
          Lost your password? Please enter your email address. You will receive a link to create a new password via email.
        </p>
        <div className='todo-form'>
          <div className='flex justify-between'>
            <div className='input-container w-full'>
              <label className='text-left'>
                <p className='mb-1.5 text-sm text-gray-plain font-semibold'>
                  Email:
                  <span className='text-red p-1.5'>*</span>
                </p>
                <input
                  type='text'
                  placeholder='e.g., artyomkagramanov@gmail.com'
                  value={ email }
                  name='email'
                  className='todo-input credentials-input text-gray-plain placeholder-gray-plain'
                  onChange={ handleChange }
                  autoComplete={ "false" }
                />
              </label>
            </div>
          </div>
        </div>

        <button className={ submitButtonClasses }>
          Reset password
        </button>
      </form>
    </div>
  );
};

ForgotPassword.propTypes = {
  isFormLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

ForgotPassword.defaultProps = {
  isFormLoading: false,
  onSubmit: console.log,
};

export default ForgotPassword;
