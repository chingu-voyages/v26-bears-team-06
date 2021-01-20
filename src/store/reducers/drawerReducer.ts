import { Actions } from '../actions/drawerActions';

export interface drawerState {
  open: boolean,
};

const initialState = {
  open: false,
};

export const drawerReducer = (state:drawerState = initialState, action: Actions) => {
  switch(action.type){
    case 'OPEN': 
      return {
        ...state,
        open: true,
      }
    case 'CLOSE':
      return {
        ...state,
        open: false,
      }
    default:
      return state
}};