import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { KeyName } from "../constants";
import { getData } from "../utils/localStorageData";

const initialState = {
  progressData: null,
  loading: true,
  error: null
};

export const fetchProgress = createAsyncThunk(
  "progress/fetchProgress",
  () => getData(KeyName.Progress, API.progress.fetchAll)
);

const progressSlice = createSlice({
  name: "progress",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProgress.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProgress.fulfilled, (state, action) => {
      state.loading = false;
      state.progressData = action.payload;
    });

    builder.addCase(fetchProgress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getProgress = () => (state) => state.progress.progressData;

export const { reducer: progressReducer } = progressSlice;
