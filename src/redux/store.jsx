import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'services/phonebookApi';
import tokenSlice from './slices/tokenSlice';
import filterSlice from './slices/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  PERSIST,
} from 'redux-persist';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'user',
  version: 1,
  storage: storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export let store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    token: tokenSlice,
    user: persistedUserSlice,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(phonebookApi.middleware),
  devTools: false,
});

export let persistor = persistStore(store);
