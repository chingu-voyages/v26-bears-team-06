import { combineReducers } from "redux";
import { drawerReducer } from './drawer/drawerReducer';
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
});

export default rootReducer;