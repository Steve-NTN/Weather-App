import { UserType } from "@/types";
import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState: { user?: UserType } = {
  user: undefined,
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state?: any, action?: any) => {
      state.user = action.payload;
    },
  },
});

export const getUser = createSelector(
  [(state) => state.userReducer.user],
  (user) => user
);

export const { setUser } = userSlide.actions;
