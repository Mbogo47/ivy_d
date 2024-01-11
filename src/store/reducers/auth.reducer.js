import { postRequest, putRequest, getRequest } from "../../config/axiosConfig"
import { setToken } from "../slices/auth.slice";

export function signInAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("login", data);
    dispatch(setToken(res?.status?.user_token));
  }
}

export function signUpAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("signup", data);
    return res;
  }
}

export function signOutAsync() {
  return async (dispatch, _getState) => {
    dispatch(setToken(null));
  }
}

export function resetPasswordAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/password/forgot", data)
    return res;
  }
}

export function changePasswordAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/password/reset", data)
    return res;
  }
}

export function UserAccountActivationAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("account_confirmation", data)
    return res;
  }
}

export function UpdateUserProfileAsync(data) {
  return async (dispatch, _getState) => {
    const res = await putRequest("api/v1/profiles/update_profile", data)
    return res;
  }
}

export function GetUserProfileAsync(data) {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/v1/profiles/show_profile")
    return res;
  }
}

export function signInWitGoogleAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/social_login/social_login", data);
    dispatch(setToken(res?.status?.user_token));
  }
}
