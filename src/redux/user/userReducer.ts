import { useDispatch } from 'react-redux';
import { getAllUsers } from './userActions';
import { 
  REGISTRATION_FAILED, 
  REGISTRATION_START, 
  REGISTRATION_SUCCESS, 
  SET_CURRENT_USER, 
  UserDispatchTypes, 
  USERS_LOADING, 
  USERS_SUCCESS,
  USERS_FAILED,
  User 
} from './userTypes';


export interface userState {
  users: User[],
  currentUser: User | null,
  loading: boolean,
  successMsg?: string,
  errorMsg?: string
};

export const INITIAL_STATE = {
  users: [],
  currentUser: null,
  loading: false,
};

const userReducer = (state:userState = INITIAL_STATE, action: UserDispatchTypes) => {
  switch (action.type) {
    case REGISTRATION_START: 
      return {
        ...state,
        loading: true
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        successMsg: action.response
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    case REGISTRATION_FAILED:
      return {
        ...state,
        errorMsg: action.error
      }
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case USERS_SUCCESS: 
      return {
        ...state,
        users: action.payload
      }
    case USERS_FAILED:
      return {
        ...state,
        errorMsg: action.error
      }
    default:
       return state
  }
};

export default userReducer;