import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

// Redux Thunk will eventually be needed to be able to make async api calls
export const store = createStore(rootReducer, composeWithDevTools());