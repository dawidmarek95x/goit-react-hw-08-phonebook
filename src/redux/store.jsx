import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'services/phonebookApi';
import tokenSlice from './slices/tokenSlice';
import filterSlice from './slices/filterSlice';

export let store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    token: tokenSlice,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
  devTools: false,
});
