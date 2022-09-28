import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'services/phonebookApi';
import filterSlice from './reducers/filterSlice';

export let store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
  devTools: false,
});
