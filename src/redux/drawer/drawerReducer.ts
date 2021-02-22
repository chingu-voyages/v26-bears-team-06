import { CLOSE_DRAWER, DrawerDispatchTypes, OPEN_DRAWER, SET_SUBCAT_QUERY } from './drawerTypes';

export interface drawerState {
  open: boolean,
  searchQueryString: string
};

const initialState = {
  open: false,
  searchQueryString: ''
};

export const drawerReducer = (state:drawerState = initialState, action: DrawerDispatchTypes) => {
  switch(action.type){
    case OPEN_DRAWER: 
      return {
        ...state,
        open: true,
      }
    case CLOSE_DRAWER:
      return {
        ...state,
        open: false,
      }
    case SET_SUBCAT_QUERY:
      return {
        ...state,
        searchQueryString: action.payload
      }
    default:
      return state
}};