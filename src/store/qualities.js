import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { KeyName } from "../constants";
import { getData } from "../utils/localStorageData";

const initialState = {
  qualitiesData: null,
  loading: true,
  error: null
};

export const fetchQualities = createAsyncThunk(
  "qualities/fetchQualities",
  () => getData(KeyName.Qualities, API.qualities.fetchAll)
);

const qualitiesSlice = createSlice({
  name: "qualities",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQualities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchQualities.fulfilled, (state, action) => {
      state.loading = false;
      state.qualitiesData = action.payload;
    });

    builder.addCase(fetchQualities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getQualities = () => (state) => state.qualities.qualitiesData;

export const { reducer: qualitiesReducer, actions } = qualitiesSlice;
