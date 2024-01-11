import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ads: [],
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    createAd: (state, action) => {
      state.ads.push(action.payload);
    },
    getAd: (state, action)=>{
      state.ads = action.payload;
    },
    deleteAd: (state, action)=>{
      state.ads = state.ads.filter((ad) => ad.id !== action.payload);
    },
    updateAd: (state, action) => {
      const updatedAdIndex = state.ads.findIndex((ad) => ad.id === action.payload.id);
      if (updatedAdIndex !== -1) {
        state.ads[updatedAdIndex] = action.payload;
      }
    },
  },
});

export const { createAd, getAd, deleteAd, updateAd } = adsSlice.actions;


const AdsSlice = adsSlice.reducer;
export default AdsSlice;
