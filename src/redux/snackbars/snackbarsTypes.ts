export const OPEN_SUCCESS = "OPEN_SUCCESS";
export const CLOSE_SUCCESS = "CLOSE_SUCCESS";
export const OPEN_ERROR = "OPEN_ERROR";
export const CLOSE_ERROR = "CLOSE_ERROR";

export interface OpenSuccess {
  type: typeof OPEN_SUCCESS
};

export interface CloseSucess {
  type: typeof CLOSE_SUCCESS
};

export interface OpenError {
  type: typeof OPEN_ERROR
};

export interface CloseError {
  type: typeof CLOSE_ERROR
};

export type SnackbarDispatchTypes = OpenSuccess | OpenError | CloseSucess | CloseError;