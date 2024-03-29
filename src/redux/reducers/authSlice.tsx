import { createSlice } from '@reduxjs/toolkit';

import { fakeStoreApi } from '../../commons/config/fakeStoreApi';
import { JwtType, UserType } from '../../types/user';

export type AuthState = {
  user: UserType | null;
  jwt: JwtType | null;
};

export const initialAuthState: AuthState = {
  user: null,
  jwt: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
        fakeStoreApi.endpoints.logIn.matchFulfilled,
      (state, { payload }) => {
        const jwtPair = payload;
        state.jwt = jwtPair;
      }
    );
    builder.addMatcher(
        fakeStoreApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        const jwtPair = payload;
        state.jwt = jwtPair;
      }
    );
    builder.addMatcher(
        fakeStoreApi.endpoints.getProfile.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  },
});

export const { logOut } = authSlice.actions;

export const selectJwt = (state: AuthState) => state.jwt;
export const selectUser = (state: AuthState) => state.user;
export const selectAdminRights = (state: AuthState) => {
  const user = state.user;
  if (user) {
    return user.role === 'admin';
  }
  return false;
};

export default authSlice.reducer;
