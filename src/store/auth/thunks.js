import {
  loginUser,
  logoutFirebase,
  registerUser,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }
    dispatch(login(result));
  };
};

export const startRegisterUser = ({ email, password, name }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUser({
      email,
      password,
      name,
    });
    if (!ok) return dispatch(logout(errorMessage));
    dispatch(login({ uid, displayName: name, email, photoURL }));
  };
};

export const startLoginUser = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, displayName, errorMessage } = await loginUser({
      email,
      password,
    });
    if (!ok) return dispatch(logout(errorMessage));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const starLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
