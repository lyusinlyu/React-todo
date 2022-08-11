import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import './index.css';

const ResetPassword = ({
  isFormLoading,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isFormLoading) {
      return;
    }
    onSubmit({
      email,
      password,
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
        <p className='text-left text-black-plain font-semibold mb-1.5'>Reset your password</p>
        <div className='todo-form'>
          <div className='flex justify-between'>
            <div className='input-container'>
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
            <div className='input-container'>
              <label className='text-left'>
                <p className='mb-1.5 text-sm text-gray-plain font-semibold'>
                  Password:
                  <span className='text-red p-1.5'>*</span>
                </p>
                <input
                  type='password'
                  placeholder='Password must have at least 6 characters'
                  value={ password }
                  name='password'
                  className='todo-input text-gray-plain placeholder-gray-plain'
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

ResetPassword.propTypes = {
  isFormLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

ResetPassword.defaultProps = {
  isFormLoading: false,
  onSubmit: console.log,
};

export default ResetPassword;
