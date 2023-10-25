import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { fullName: "", _id: "", email: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
