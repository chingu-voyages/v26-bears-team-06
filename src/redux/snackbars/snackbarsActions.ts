import {
  OPEN_SUCCESS,
  OPEN_ERROR,
  CLOSE_SUCCESS,
  CLOSE_ERROR
} from './snackbarsTypes';

export const openSuccess = () => {
  return {
    type: OPEN_SUCCESS
  }
};

export const closeSuccess = () => {
  return {
    type: CLOSE_SUCCESS
  }
};

export const openError = () => {
  return {
    type: OPEN_ERROR
  }
};

export const closeError = () => {
  return {
    type: CLOSE_ERROR
  }
};