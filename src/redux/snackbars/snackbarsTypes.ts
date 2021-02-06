export const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";

export interface OpenSnackbar {
  type: typeof OPEN_SNACKBAR,
  message: string,
  severity: "success" | "info" | "warning" | "error" | undefined
};

export interface CloseSnackbar {
  type: typeof CLOSE_SNACKBAR
};

export type SnackbarDispatchTypes = OpenSnackbar | CloseSnackbar;