import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { KeyName } from "../constants";
import { getData } from "../utils/localStorageData";

const initialState = {
  socialData: null,
  loading: true,
  error: null
};

export const fetchSocial = createAsyncThunk(
  "social/fetchsocial",
  () => getData(KeyName.Social, API.social.fetchAll)
);

const socialSlice = createSlice({
  name: "social",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSocial.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSocial.fulfilled, (state, action) => {
      state.loading = false;
      state.qualitiesData = action.payload;
    });
    builder.addCase(fetchSocial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getSocial = () => (state) => state.social.qualitiesData;
export const { reducer: socialReducer, actions } = socialSlice;
