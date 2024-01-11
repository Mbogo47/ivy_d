
import {
  postRequest,
  getRequest,
  deleteRequest,
  putRequest,
} from "../../config/axiosConfig";
import { createAd, getAd, deleteAd, updateAd } from "../slices/ads.slice";
// import {getTranslation} from "./languageContext.js"
// 
export function createAdsAsync(data) {
  return async (dispatch, _getState) => {
    const res = await postRequest("api/v1/ads", data);
    dispatch(createAd(res?.ad));
    window.location.replace(res.checkout_link)
  }
}

export function getAdsAsync() {
  return async (dispatch, _getState) => {
    const res = await getRequest("api/v1/ads");
     dispatch(getAd(res));
  }
}

export function deleteAdsAsync(id) {
  return async (dispatch, _getState) => {
    const res = await deleteRequest(`api/v1/ads/${id}`);
     dispatch(deleteAd(id));
  }
}

export function updateAdsAsync(data) {
  return async (dispatch, _getState) => {
    const { id, ...updateData } = data; // Assuming 'id' is included in the 'data' object
    const res = await putRequest(`api/v1/ads/${id}`, updateData);
    dispatch(updateAd(res?.ad));
  };
}
