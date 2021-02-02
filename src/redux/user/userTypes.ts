export const USERS_LOADING = "USERS_LOADING";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILED = "USERS_FAILED"
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const REGISTRATION_START = "REGISTRATION_START";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";

export interface User {
  user_id: number,
  name: string,
  email: string,
  password: string,
  city: string,
  state: string,
  zip: string,
  phone_number?: string,
  address?: string,
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
};

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

export type UserDispatchTypes = 
  UsersFailed |
  UsersLoading |
  UsersSuccess |
  SetCurrentUser | 
  RegistrationFailed |
  RegistrationStart | 
  RegistrationSuccess;
