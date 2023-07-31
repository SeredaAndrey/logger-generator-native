import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateUserData,
  verification,
} from "./authOperations";

const initialState = {
  name: null,
  email: null,
  token: null,
  avatar: null,
  inerfaceLanguage: "en",
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      //registration
      .addCase(register.fulfilled, (state, action) => {
        state.name = null;
        state.email = null;
        state.avatar = null;
        state.inerfaceLanguage = "en";
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.avatar = null;
        state.inerfaceLanguage = "en";
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      //Verification
      .addCase(verification.fulfilled, (state, action) => {
        state.email = action.payload.owner.owner.email;
        state.name = action.payload.owner.owner.firstName || null;
        state.avatar = action.payload.owner.owner.avatarUrl;
        state.inerfaceLanguage = action.payload.owner.owner.inerfaceLanguage;
        state.token = action.payload.owner.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(verification.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(verification.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.avatar = null;
        state.inerfaceLanguage = "en";
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      //login
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.owner.owner.email;
        state.name =
          action.payload.owner.owner.firstName ||
          action.payload.owner.owner.email;
        state.avatar = action.payload.owner.owner.avatarUrl;
        state.inerfaceLanguage = action.payload.owner.owner.inerfaceLanguage;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.avatar = null;
        state.inerfaceLanguage = "en";
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      //logout
      .addCase(logOut.fulfilled, (state) => {
        state.name = null;
        state.email = null;
        state.avatar = null;
        state.inerfaceLanguage = "en";
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
      })
      //refresh
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.name =
          action.payload.userData.firstName || action.payload.userData.email;
        state.email = action.payload.userData.email;
        state.avatar = action.payload.userData.avatarUrl;
        state.inerfaceLanguage = action.payload.userData.inerfaceLanguage;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })

      .addCase(refreshUser.rejected, (state, action) => {
        state.name = null;
        state.email = null;
        state.avatar = null;
        state.inerfaceLanguage = "en";
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.name = action.payload.data.firstName;
        state.email = action.payload.data.email;
        state.inerfaceLanguage = action.payload.data.inerfaceLanguage;
        state.isLoading = false;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
      });
    //   .addCase(uploadAvatar.fulfilled, (state, action) => {
    //     state.avatar = action.payload.avatarURL;
    //     state.isLoading = false;
    //   })
    //   .addCase(uploadAvatar.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(uploadAvatar.rejected, (state, action) => {
    //     state.isLoading = false;
    //   });
  },
});

export const authReducer = authSlice.reducer;
