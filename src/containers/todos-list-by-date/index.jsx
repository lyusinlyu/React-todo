import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListByDate from "views/todos/list-by-date";
import {
  updateTodo,
  deleteTodo,
  getTodosListByDate,
} from 'api/auth';
import { handleAxiosDefautError } from 'helpers/ErrorHandler';

const TodosListByDateContainer = () => {
  const params = useParams();
  const { date: dateFromLocation } = params;
  const [isDataInited, setIsDataInited] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function init() {
      const response = await getTodosListByDate(dateFromLocation);
      setIsDataInited(true);
      setTodos(response.data.todos);
    }
    init();
  }, [])

  const handleTodoUpdate = async (todo) => {
    const newTodos = todos.map((item) => {
      if(item.id === todo.id) {
        return todo;
      }
      return item;
    });
    setTodos(newTodos);
    try {
      await updateTodo(todo.id, todo);
    } catch (error) {
      handleAxiosDefautError();
    }
  };

  const handleTodoDelete = async (id) => {
    const areYouSure = confirm('Are you sure?');
    if(!areYouSure) {
      return;
    }
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    try {
      await deleteTodo(id);
    } catch (error) {
      handleAxiosDefautError();
    }
  };

  return (
    <ListByDate
      todos={ todos }
      isDataInited={ isDataInited }
      date={ dateFromLocation }
      onTodoUpdate={ handleTodoUpdate }
      onTodoDelete={ handleTodoDelete }
    />
  )
};

export default TodosListByDateContainer;
