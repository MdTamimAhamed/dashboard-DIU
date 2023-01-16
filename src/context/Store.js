import React, { createContext, useReducer } from 'react';
import AuthReducer from '../context/AuthReducer';
import { LOGIN, SET_PROFILE, SET_ROLE, SET_TOKEN, SET_ERROR } from './Types';
import axios from 'axios';
import baseURL from '../utils/baseURL';

const initialState = {
  authenticated: false,
  profile: {},
  token: '',
  role: '',
  error: {
    msg: '',
    err: {}
  }
};

//create context
export const AuthContext = createContext();

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Actions will be defined here
  async function login(payload) {
    try {
      const url = `${baseURL}/public/login`;
      const res = await axios.post(url, payload);
      const { token, role } = res.data;

      localStorage.setItem('DIUToken', token);
      localStorage.setItem('role', role);

      dispatch({
        type: LOGIN,
        payload: { token, role }
      });
      return true;
    } catch (err) {
      console.log(err);
      dispatch({
        type: SET_ERROR,
        payload: { msg: 'Login failed', err: err?.response?.data || {} }
      });
      return false;
    }
  }

  function retrieveDataFromLocalStorage() {
    const token = localStorage.getItem('DIUToken');
    const role = localStorage.getItem('role');

    if (token && role) {
      dispatch({
        type: LOGIN,
        payload: { token, role }
      });
    } else {
      // Redirect to login page
    }
  }

  async function getProfile() {
    // URL: /api/auth/profile
    // Call this endpoint if user is authenticated and if profile data is not in the state
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        retrieveDataFromLocalStorage,
        getProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
