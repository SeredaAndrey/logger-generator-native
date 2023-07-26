import axios from "axios";

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
    console.log("error.message", error.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("api/auth/logout");
    token.unset();
  } catch (error) {
    return error.message;
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("api/owner");
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
