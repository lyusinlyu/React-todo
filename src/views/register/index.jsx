import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { routeCodes } from 'routes'
import './index.css';

const Register = ({
  isFormLoading,
  onSubmit,
}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
      case 'name': {
        setName(value);
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
      name,
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
        <p className='text-left text-black-plain font-semibold mb-1.5'>Registration form</p>
        <div className='todo-form'>
          <div className='flex justify-between'>
            <div className='input-container'>
              <label className='text-left'>
                <p className='mb-1.5 text-sm text-gray-plain font-semibold'>
                  Name:
                  <span className='text-red p-1.5'>*</span>
                </p>
                <input
                  type='text'
                  placeholder='e.g., Artyom'
                  value={ name }
                  name='name'
                  className='todo-input credentials-input text-gray-plain placeholder-gray-plain'
                  onChange={ handleChange }
                  required
                  autoComplete={ "true" }
                />
              </label>
            </div>
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
          </div>
          <div className='w-full flex justify-center mt-5'>
            <label className='w-full text-left'>
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

        <button className={ submitButtonClasses }>
          Register
        </button>
      </form>

      <p className='text-gray-plain text-left text-sm mt-5'>Already have an account?
        <Link to={ routeCodes.LOGIN } className='text-blue-primary ml-1.5 underline'>Log in</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  isFormLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Register.defaultProps = {
  isFormLoading: false,
  onSubmit: console.log,
};

export default Register;
