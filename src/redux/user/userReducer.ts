import { 
  REGISTRATION_FAILED, 
  REGISTRATION_START, 
  REGISTRATION_SUCCESS, 
  SET_CURRENT_USER, 
  UserDispatchTypes, 
  USERS_LOADING, 
  USERS_SUCCESS,
  USERS_FAILED,
  User, 
  LOGOUT_CURRENT_USER,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  UPDATE_USER
} from './userTypes';


export interface userState {
  users: User[],
  currentUser: User,
  loading: boolean,
  successMsg?: string,
  errorMsg?: string,
  token?: string
};

export const INITIAL_STATE = {
  users: [],
  currentUser: {} as User,
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
        currentUser: {
          ...action.payload,
          token: action.token,
        }
      }
    case LOGOUT_CURRENT_USER:
      return {
        ...state,
        token: '',
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
        users: action.payload,
        loading: false
      }
    case USERS_FAILED:
      return {
        ...state,
        errorMsg: action.error,
        loading: false
      }
    case LOGIN_LOADING: 
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        loading: false,
        token: action.token
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
       return state
  }
};

export default userReducer;