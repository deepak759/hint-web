// src/redux/userSlice.ts
'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  name: string | null;
  email: string | null;
  picture: string | null;
  accessToken:string  |null;

}

const initialState: UserState = {
  name: null,
  email: null,
  picture: null,
  accessToken:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
      state.accessToken=action.payload.accessToken;

    },
    clearUserInfo: (state) => {
      state.name = null;
      state.email = null;
      state.picture = null;
      state.accessToken=null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
