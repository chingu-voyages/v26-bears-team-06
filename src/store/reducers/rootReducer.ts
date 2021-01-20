import { combineReducers } from "redux";
import { drawerReducer } from './drawerReducer';

const rootReducer = combineReducers({
  drawer: drawerReducer,
});

export default rootReducer;