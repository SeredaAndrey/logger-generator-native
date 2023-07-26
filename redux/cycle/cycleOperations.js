import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import queryString from "query-string";

export const addWorkingCycle = createAsyncThunk(
  "cycle/add",
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("api/cycles", credential);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const patchWorkingCycleUnit = createAsyncThunk(
  "cycle/patch",
  async ({ id, cycle }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`api/cycles/${id}`, cycle);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWorkingCycleUnit = createAsyncThunk(
  "cycle/delete",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`api/cycles/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSingleWorkingCycle = createAsyncThunk(
  "cycle/fetchOne",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`api/cycles/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchWorkingCycles = createAsyncThunk(
  "cycle/fetch",
  async ({ filtering, sorting }, { rejectWithValue }) => {
    const { dateStart, dateStop } = filtering;
    const { filter, sort } = sorting;
    const startDate = dateStart !== null && new Date(dateStart);
    const startDateMill = dateStart !== null && startDate.getTime();
    const stopDate = dateStop !== null && new Date(dateStop);
    const stopDateMill = dateStop !== null && stopDate.getTime();
    const queryParams = {
      ...(filter !== null && { filter }),
      ...(sort !== null && { sort }),
      ...(dateStart !== null && { dateStart: startDateMill }),
      ...(dateStop !== null && { dateStop: stopDateMill }),
    };
    const queryStringParams = queryString.stringify(queryParams);
    try {
      const { data } = await axios.get(`api/cycles/?${queryStringParams}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCalcData = createAsyncThunk(
  "cycle/fetchCalculate",
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("api/calcdata");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
