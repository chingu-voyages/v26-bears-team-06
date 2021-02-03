import { combineReducers } from "redux";
import { categoryReducer } from "./category/categoryReducer";
import { drawerReducer } from './drawer/drawerReducer';
import postReducer from "./post/postReducer";
import { snackbarReducer } from "./snackbars/snackbarsReducer";
import userReducer from "./user/userReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  drawer: drawerReducer,
  user: userReducer,
  post: postReducer,
  category: categoryReducer,
  snackbar: snackbarReducer,
});

export default persistReducer(persistConfig, rootReducer);