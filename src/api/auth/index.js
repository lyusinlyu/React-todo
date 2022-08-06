import axios from 'axios';
import Auth from 'helpers/Auth';
// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

// instance for auth requests
const client = axios.create();

client.interceptors.request.use((config) => {
  const result = Object.assign({}, config);
  result.headers.Authorization = `Bearer ${ Auth.getToken() }`;
  return config;
}, (error) => {
  return Promise.reject(error);
});

client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if(error.response && error.response.status === 401) {
      // Auth.logout();
      // Auth.redirectSignIn('', () => {
      //   store.dispatch(push(Router.route('SIGN_IN').getCompiledPath()));
      // });
    }
    throw error;
  }
);

export function initSiteDetails() {
  return client.get(`${ apiUrl }/api/me`);
}

export function createTodo(data) {
  return client.post(`${ apiUrl }/api/todos`, data);
}

export function getTodosList() {
  return client.get(`${ apiUrl }/api/todos-list-by-date`);
}

export function getTodosListByDate(date) {
  return client.get(`${ apiUrl }/api/todos-list-by-date/${ date }`);
}

export function updateTodo(id, data) {
  return client.put(`${ apiUrl }/api/todos/${ id }`, data);
}

export function deleteTodo(id) {
  return client.delete(`${ apiUrl }/api/todos/${ id }`);
}
