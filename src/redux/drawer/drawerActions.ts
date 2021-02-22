import { Dispatch } from "react";
import { DrawerDispatchTypes, SET_SUBCAT_QUERY } from "./drawerTypes";

export const setSubcatQuery = (subcatQuery: string) => (dispatch: Dispatch<DrawerDispatchTypes>) => {
  dispatch({
    type: SET_SUBCAT_QUERY,
    payload: subcatQuery
  })
};