import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from './snackbarsTypes';

export const openSnackbar = (message: string, severity: string) => {
  return {
    type: OPEN_SNACKBAR,
    message,
    severity,
  }
};

export const closeSnackbar = () => {
  return {
    type: CLOSE_SNACKBAR
  }
};