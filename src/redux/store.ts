import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// Redux Thunk will eventually be needed to be able to make async api calls
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));