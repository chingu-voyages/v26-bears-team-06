import { combineReducers } from "redux";
import { drawerReducer } from './drawer/drawerReducer';
import postReducer from "./post/postReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
  post: postReducer,
});

export default rootReducer;