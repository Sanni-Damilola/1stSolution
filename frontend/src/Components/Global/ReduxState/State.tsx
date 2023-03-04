import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { UserData } from "../AllInterfaces";

const initialState = {
  currentUser: {} as UserData | null,
};

const ReduxState = createSlice({
  name: "piggy",
  initialState,
  reducers: {
    User: (state, { payload }: PayloadAction<UserData>) => {
      state.currentUser = payload;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { User } = ReduxState.actions;

export default ReduxState.reducer;
