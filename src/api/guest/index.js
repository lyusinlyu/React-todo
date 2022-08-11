/* eslint-disable no-undef */
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

// instance for guest requests

const client = axios.create();

export function login(data) {
  return client.post(`${ apiUrl }/api/login`, data);
}

export function register(data) {
  return client.post(`${ apiUrl }/api/register`, data);
}

export function forgotPassword(data) {
  return client.post(`${ apiUrl }/api/forget-password`, data);
}

export function resetPassword(token, data) {
  return client.post(`${ apiUrl }/api/reset-password/${ token }`, data);
}
