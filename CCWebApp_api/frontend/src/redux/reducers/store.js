import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '.';

import { loadState, saveState } from './localstorage';

const initialState = loadState();
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
