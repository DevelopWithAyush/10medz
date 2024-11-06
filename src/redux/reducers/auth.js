import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAdmin: false,
  ispharmacist: false,
  issalesPerson: false,
  loader: true,
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userExists: (state, action) => {
      state.user = action.payload;
      state.loader = false;
    },
    userNotExists: (state) => {
      state.user = null;
      state.loader = false;
    },
  },
});

export const { userExists, userNotExists } = authslice.actions;
export default authslice;
