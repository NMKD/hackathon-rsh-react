import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";
import { KeyName } from "../constants";
import { getData } from "../utils/localStorageData";

const initialState = {
  usersData: null,
  loading: true,
  error: null
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  () => getData(KeyName.Users, API.users.fetchAll)
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.usersData = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export const getUsers = () => (state) => state.users.usersData;
export const { reducer: usersReducer, actions } = usersSlice;
