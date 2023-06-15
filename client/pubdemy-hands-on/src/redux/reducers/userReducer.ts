import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/userModel";

const initialState = {
  user: new UserModel(),
  isUserAuthorized: false,
  error:'',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (store, { payload }: PayloadAction<UserModel>) => {
      store.user = payload;
      return store;
    },
    setUserAuthorize: (store, { payload }: PayloadAction<boolean>) => {
      store.isUserAuthorized = payload;
      return store;
    },
    setError: (store, { payload }: PayloadAction<string>) => {
      store.error = payload;
      return store;
    },
  },
});

export const { setUser, setUserAuthorize,setError } = userSlice.actions;
export default userSlice.reducer;
