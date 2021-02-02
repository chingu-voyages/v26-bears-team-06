import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
import { drawerReducer } from './drawer/drawerReducer';
import postReducer from "./post/postReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
  post: postReducer,
  category: categoryReducer,
});

export default rootReducer;