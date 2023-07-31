import axios from "axios";
import Toast from "react-native-toast-message";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://logger-generator-rest-api.onrender.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/signup",
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("api/auth/reg", credential);
      token.unset();
      return data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "email is already exist",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const verification = createAsyncThunk(
  "auth/verifycation",
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("api/auth/verify", credential);
      return data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "token incorrect",
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credential) => {
  try {
    const { data } = await axios.post("api/auth/login", credential);

    token.set(data.token);
    return data;
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "email or password is wrong",
    });
    return thunkAPI.rejectWithValue();
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("api/auth/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null || !persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("api/owner");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateData",
  async (
    { firstName, secondName, email, inerfaceLanguage },
    { rejectWithValue }
  ) => {
    const body = {
      firstName,
      seccondName: secondName,
      email,
      inerfaceLanguage,
    };
    try {
      const { data } = await axios.patch("api/owner/patchName", body);
      return data;
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "error",
      });
      return rejectWithValue(error.message);
    }
  }
);
