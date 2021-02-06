import {
  SnackbarDispatchTypes,
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR
} from './snackbarsTypes';

export interface SnackbarState {
  open: boolean,
  message: string,
  severity: "success" | "info" | "warning" | "error" | undefined
};

const INITIAL_STATE = {
  open: false,
  message: '',
  severity: undefined,
};

export const snackbarReducer = (state: SnackbarState = INITIAL_STATE, action: SnackbarDispatchTypes) => {
  switch(action.type){
    case OPEN_SNACKBAR: 
      return {
        ...state,
        open: true,
        message: action.message,
        severity: action.severity
      }
    case CLOSE_SNACKBAR: 
      return {
        ...state,
        open: false
      }
    default:
       return state
  } 
}

