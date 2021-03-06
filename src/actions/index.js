import ApiService from './../utils/ApiService';
import _ from 'lodash';

import { SIGN_IN, SIGN_OUT, FETCH_USERS, FETCH_USER, PUT_USER, DELETE_USER } from './types';

export const fetchUsers = () => async (dispatch) => {
  const response = await ApiService.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: response.data.data,
  });
};

export const updateUser = (id, form) => (dispatch) => {
  _updateUser(id, form, dispatch);
};

export const deleteUser = (id) => (dispatch) => {
  _deleteUser(id, dispatch);
};

const _updateUser = _.memoize(async (id, form, dispatch) => {
  const response = await ApiService.put(`/user${id}`, form);
  dispatch({
    type: PUT_USER,
    payload: response.data.data,
  });
});

const _deleteUser = _.memoize(async (id, dispatch) => {
  const response = await ApiService.delete(`/user/${id}`);
  dispatch({
    type: DELETE_USER,
    payload: response.data.data,
  });
});

export const signIn = (form) => (dispatch) => {
  _signIn(form, dispatch);
};

const _signIn = _.memoize(async (form, dispatch) => {
  const response = await ApiService.post(`/login`, form);
  dispatch({
    type: SIGN_IN,
    payload: response.data.data,
  });
});

export const signOut = () => async (dispatch) => {
  dispatch({
    type: SIGN_OUT,
    payload: false,
  });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await ApiService.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: response.data.data,
  });
});
