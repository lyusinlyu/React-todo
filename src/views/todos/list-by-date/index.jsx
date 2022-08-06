import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { routeCodes } from 'routes';
import TodoRow from './todo-row';

import './index.css';

const ListByDate = ({
  todos,
  isDataInited,
  date,
  onTodoUpdate,
  onTodoDelete,
}) => {

  return (
    <div className='todo-app bg-white'>
      <div className='flex justify-start items-center mb-2'>
        <Link to={ routeCodes.HOMEPAGE }>
          <button className='back-btn'>
            <img className='cursor-pointer' src='/navigate_back_24px.svg' alt='navigate-back-icon' />
            Go back
          </button>
        </Link>
        <p className='text-2xl font-bold ml-3.5'>
          { date } { isDataInited && `(${ todos.length })` }
        </p>
      </div>
      <div className='todo-dates-container bg-gray-light'>
        {
          isDataInited && todos.length > 0 && todos.map((todo, index) => {
            return (
              <TodoRow
                key={ index }
                todo={ todo }
                onTodoUpdate={ onTodoUpdate }
                onTodoDelete={ onTodoDelete }
              />
            )
          })
        }
        {
          isDataInited && todos.length === 0 && (
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
  );
};

ListByDate.propTypes = {
  isDataInited: PropTypes.bool,
  todos: PropTypes.array,
  date: PropTypes.string,
  onTodoUpdate: PropTypes.func,
  onTodoDelete: PropTypes.func,
};

ListByDate.defaultProps = {
  todos: [],
  isDataInited: false,
  date: '0000-00-00',
  onTodoUpdate: console.log,
  onTodoDelete: console.log,
};

export default ListByDate;
