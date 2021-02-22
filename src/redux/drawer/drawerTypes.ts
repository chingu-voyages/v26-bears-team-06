export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const SET_SUBCAT_QUERY = "SET_SUBCAT_QUERY";

export interface OpenDrawer {
  type: typeof OPEN_DRAWER
};

export interface CloseDrawer {
  type: typeof CLOSE_DRAWER
};

export interface SetSubCatQuery {
  type: typeof SET_SUBCAT_QUERY,
  payload: string
}

export type DrawerDispatchTypes = 
  OpenDrawer |
  CloseDrawer |
  SetSubCatQuery