import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // "checking", "not-authenticated", "authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload } /* action */) => {
      state.status = "authenticated"; // "checking", "not-authenticated", "authenticated",
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated"; // "checking", "not-authenticated", "authenticated",
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
