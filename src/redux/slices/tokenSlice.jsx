import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, { payload }) => payload.token,
    deleteToken: (state, { payload }) => initialState,
  }
});

export const { addToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;