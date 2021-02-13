import { OpenSnackbar } from "../snackbars/snackbarsTypes";

export const USERS_LOADING = "USERS_LOADING";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILED = "USERS_FAILED"
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"

export interface User {
  user_id?: number,
  name: string,
  email: string,
  password?: string,
  city: string,
  state: string,
  zip: string,
  phone_number?: string,
  address?: string,
  token?: string,
};
export interface UserLogin {
  email: string,
  password: string,
};

export interface GetUser {
  type: typeof GET_USER 
};

export interface UsersLoading {
  type: typeof USERS_LOADING
};

export interface UsersSuccess {
  type: typeof USERS_SUCCESS,
  payload: User[]
};

export interface UsersFailed {
  type: typeof USERS_FAILED,
  error: string
};

export interface SetCurrentUser {
  type: typeof SET_CURRENT_USER,
  payload: User,
  token?: string,
};

export interface LogoutCurrentUser {
  type: typeof LOGOUT_CURRENT_USER,
  token: string
}

export interface RegistrationStart {
  type: typeof REGISTRATION_START,
};

export interface RegistrationSuccess {
  type: typeof REGISTRATION_SUCCESS,
  response: string
};

export interface RegistrationFailed {
  type: typeof REGISTRATION_FAILED,
  error: string
};

export interface LoginLoading {
  type: typeof LOGIN_LOADING,
};

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS,
  payload: UserLogin,
  token: string,
};

export interface LoginFailed {
  type: typeof LOGIN_FAILED
};

export interface UpdateUser {
  type: typeof UPDATE_USER,
  user: User
}



export type UserDispatchTypes = 
  GetUser |
  UsersFailed |
  UsersLoading |
  UsersSuccess |
  SetCurrentUser | 
  LogoutCurrentUser |
  LoginFailed |
  LoginSuccess |
  LoginLoading |
  RegistrationFailed |
  RegistrationStart | 
  RegistrationSuccess |
  OpenSnackbar |
  UpdateUser;
