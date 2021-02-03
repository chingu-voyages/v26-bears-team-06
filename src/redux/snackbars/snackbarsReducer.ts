import {
  SnackbarDispatchTypes,
  OPEN_ERROR,
  OPEN_SUCCESS,
  CLOSE_ERROR,
  CLOSE_SUCCESS
} from './snackbarsTypes';

export interface SnackbarState {
  successOpen?: boolean,
  errorOpen?: boolean
};

const INITIAL_STATE = {
  successOpen: false,
  errorOpen: false,
};

export const snackbarReducer = (state: SnackbarState = INITIAL_STATE, action: SnackbarDispatchTypes) => {
  switch(action.type){
    case OPEN_SUCCESS: 
      return {
        ...state,
        successOpen: true
      }
    case CLOSE_SUCCESS: 
      return {
        ...state,
        successOpen: false
      }
    case OPEN_ERROR:
      return {
        ...state,
        errorOpen: true
      }
    case CLOSE_ERROR: 
      return {
        ...state,
        errorOpen: false
      }
    default:
       return state
  } 
}

