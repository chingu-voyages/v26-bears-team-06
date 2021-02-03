import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

// Redux Thunk will eventually be needed to be able to make async api calls
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export type RootStore = ReturnType<typeof rootReducer>

export { store, persistor };