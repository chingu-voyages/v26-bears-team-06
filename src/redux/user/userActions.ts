import axios from 'axios';
import { Dispatch } from 'redux';
import { OPEN_ERROR, OPEN_SUCCESS } from '../snackbars/snackbarsTypes';
import { 
  User, 
  UserDispatchTypes, 
  SET_CURRENT_USER, 
  REGISTRATION_START, 
  REGISTRATION_FAILED, 
  REGISTRATION_SUCCESS, 
  USERS_LOADING, 
  USERS_SUCCESS, 
  USERS_FAILED, 
  LOGOUT_CURRENT_USER,
  UserLogin,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './userTypes';

export const registerAndSetNewUser = (user: User) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: REGISTRATION_START
    });

    const newUser = await axios.post('https://craigs2list-dev.herokuapp.com/users', user);
    console.log(newUser);
    dispatch({
      type: REGISTRATION_SUCCESS,
      response: "success"
    });

    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });

  } catch (error) {
    dispatch({
      type: REGISTRATION_FAILED,
      error: error
    })
  }
};

export const getAllUsers = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: USERS_LOADING
    });

    const res = await axios.get('https://craigs2list-dev.herokuapp.com/users');

    dispatch({
      type: USERS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: USERS_FAILED,
      error: error
    })
  }
};

export const setCurrentUser = (user: User | undefined) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
    token: '',
  }
};

export const loginUser = (userLogin : UserLogin) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: LOGIN_LOADING
    });

    const loginInfo = await axios.post('https://craigs2list-dev.herokuapp.com/login', userLogin);
    console.log("LOGIN:", loginInfo);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userLogin,
      token: loginInfo.data.token
    });
    dispatch({
      type: OPEN_SUCCESS
    });

  } catch (error) {
    dispatch({
      type: LOGIN_FAILED
    });
    dispatch({
      type: OPEN_ERROR
    });
  }
}