import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

const initialState = {
  usersData: null,
  loading: true,
  error: null
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    return await API.users.fetchAll();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
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
