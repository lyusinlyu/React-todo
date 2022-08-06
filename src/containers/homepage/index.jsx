import React, { useEffect, useState } from "react";
import ListAndCreate from 'views/todos/list-and-create';
import {
  createTodo,
  getTodosList,
} from 'api/auth';
import { handleAxiosDefautError } from 'helpers/ErrorHandler';
import { toast } from 'react-toastify'

const HomepageContainer = () => {
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [isDataInited, setIsDataInited] = useState(false);
  const [todosListByDate, setTodosListByDate] = useState({});

  useEffect(() => {
    async function init() {
      const response = await getTodosList();
      setIsDataInited(true);
      setTodosListByDate(response.data.todos);
    }
    init();
  }, [])
  const handleSubmit = async (inputs) => {
    setIsRequestInProgress(true);
    try {
      await createTodo(inputs);
      const { date } = inputs;
      const newTodosListByDate = {
        ...todosListByDate,
      }
      if(!newTodosListByDate[date]) {
        newTodosListByDate[date] = 0;
      }
      newTodosListByDate[date]++;
      setTodosListByDate(newTodosListByDate);
      toast.success('Todo added');
    } catch (error) {
      handleAxiosDefautError(error);
    } finally {
      setIsRequestInProgress(false);
    }
  }

  return (
    <ListAndCreate
      isFormLoading={ isRequestInProgress }
      onSubmit={ handleSubmit }
      todosListByDate={ todosListByDate }
      isDataInited={ isDataInited }
    />
  )
};

export default HomepageContainer;
