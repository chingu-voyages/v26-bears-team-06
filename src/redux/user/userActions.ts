import axios from 'axios';
import { Dispatch } from 'redux';
import { 
  User, 
  UserDispatchTypes, 
  SET_CURRENT_USER, 
  REGISTRATION_START, 
  REGISTRATION_FAILED, 
  REGISTRATION_SUCCESS, 
  USERS_LOADING, 
  USERS_SUCCESS, 
  USERS_FAILED 
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

export const setCurrentUser = (user: User) => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
};