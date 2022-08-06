import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { routeCodes } from 'routes';
import './index.css';
import moment from "moment";

const ListAndCreate = ({
  isFormLoading,
  onSubmit,
  todosListByDate,
  isDataInited,
}) => {

  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const minDate = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isFormLoading) {
      return;
    }
    const formattedDate = moment(date).format('YYYY-MM-DD');
    onSubmit({
      date: formattedDate,
      title,
    });
    setTitle('');
  }

  const submitButtonClasses = classNames(
    'bg-blue-primary',
    'todo-button',
    {
      'bg-blue-primary': !isFormLoading,
      'bg-blue-primary/60': isFormLoading,
    }
  );

  return (
    <div className='todo-app bg-white'>
      <div>
        <h1 className='text-black-plain text-left text-2xl font-bold'>To do list</h1>
        <form className='todo-form' onSubmit={ handleSubmit }>
          <p className='text-left text-black-plain font-semibold mb-1.5'>New task</p>
          <div className='flex justify-between'>
            <input
              type='text'
              placeholder='Type here'
              name='text'
              className='todo-input text-gray-plain placeholder-gray-plain'
              value={ title }
              onChange={ (e) => setTitle(e.target.value) }
            />
            <DatePicker
              selected={ date }
              dateFormat='yyyy-MM-dd' minDate={ minDate }
              onChange={ (date) => setDate(date) }
              wrapperClassName='todo-input date-wrapper'
              className='text-gray-plain cursor-pointer'
            />
            <button className={ submitButtonClasses }>Add</button>
          </div>
        </form>
        <div className='todo-dates-container bg-gray-light'>
          <p className='text-left text-black-plain font-semibold mb-1.5'>Dates</p>
          {
            isDataInited && Object.keys(todosListByDate).length > 0 && (
              Object.keys(todosListByDate).map((key, index) => {
                return (
                  <div key={ index } className='todo-row'>
                    <Link to={ `${ routeCodes.TODOS_LIST_DATE.replace(':date', key) }` }>
                      <div>{ key } ({todosListByDate[key]})</div>
                    </Link>
                    <Link to={ `${ routeCodes.TODOS_LIST_DATE.replace(':date', key) }` }>
                      <div className='next-icon text-right'>
                        <img className='cursor-pointer' src='/navigate_next_24px.svg' alt='navigate-next-icon' />
                      </div>
                    </Link>
                  </div>
                );
              })
            )
          }
          {
            isDataInited && Object.keys(todosListByDate).length === 0 && (
              <div>There is no Todo item yet..</div>
            )
          }
          {
            !isDataInited &&  (
              <div>Loading...</div>
            )
          }
        </div>
      </div>
    </div>
  );
};

ListAndCreate.propTypes = {
  isFormLoading: PropTypes.bool,
  isDataInited: PropTypes.bool,
  todosListByDate: PropTypes.object,
  onSubmit: PropTypes.func,
};

ListAndCreate.defaultProps = {
  isFormLoading: false,
  isDataInited: false,
  todosListByDate: {},
  onSubmit: console.log,
};

export default ListAndCreate;
