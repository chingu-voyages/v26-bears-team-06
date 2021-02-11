import axios from 'axios';
import { Dispatch } from 'redux';
import { OPEN_SNACKBAR } from '../snackbars/snackbarsTypes';
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
  LOGIN_FAILED,
  UPDATE_USER
} from './userTypes';

export const registerAndSetNewUser = (user: User) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: REGISTRATION_START
    });

    const newUser = await axios.post('https://craigs2list-dev.herokuapp.com/users', user);
    
    dispatch({
      type: REGISTRATION_SUCCESS,
      response: "success"
    });

    dispatch({
      type: SET_CURRENT_USER,
      payload: newUser.data
    });

    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Registration Successful',
      severity: 'success'
    });

  } catch (error) {
    dispatch({
      type: REGISTRATION_FAILED,
      error: error
    });
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Registration Failed',
      severity: 'error'
    });
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

export const logoutCurrentUser = () => (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({
    type: LOGOUT_CURRENT_USER,
    token: '',
  })
  dispatch({
    type: OPEN_SNACKBAR,
    message: "Logout Successful",
    severity: 'warning'
  })
};

export const loginUser = (userLogin : UserLogin) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: LOGIN_LOADING
    });
    console.log("USER LOGIN:", userLogin);
    const loginInfo = await axios.post('https://craigs2list-dev.herokuapp.com/login', userLogin);
    
    const user = await axios.get(`https://craigs2list-dev.herokuapp.com/users/${loginInfo.data.user_id}`);

    dispatch({
      type: SET_CURRENT_USER,
      payload: user.data
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: userLogin,
      token: loginInfo.data.token
    });


    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Login Successful',
      severity: 'success'
    });



  } catch (error) {
    dispatch({
      type: LOGIN_FAILED
    });
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Email and/or Password are incorrect',
      severity: 'error'
    });
  }
};

export const updateUser = (user: User, userId: number | undefined, token: string | undefined) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const updatedUser = await axios.patch(`https://craigs2list-dev.herokuapp.com/users/${userId}`, user, config);

    dispatch({
      type: UPDATE_USER,
      user: updatedUser.data
    });
    dispatch({
      type: SET_CURRENT_USER,
      payload: updatedUser.data
    });
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Update successful',
      severity: 'success'
    });
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Error updating user info',
      severity: 'error'
    })
  }
};