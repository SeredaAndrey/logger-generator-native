const { createSlice } = require("@reduxjs/toolkit");
const {
  addWorkingCycle,
  patchWorkingCycleUnit,
  deleteWorkingCycleUnit,
  fetchSingleWorkingCycle,
  fetchWorkingCycles,
  fetchCalcData,
} = require("./cycleOperation");

const initialState = {
  isLoading: false,
};

const cycleSlice = createSlice({
  name: "cycle",
  initialState,
  extraReducers: (builder) => {
    builder
      //create new cycle
      .addCase(addWorkingCycle.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addWorkingCycle.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addWorkingCycle.rejected, (state, action) => {
        state.isLoading = false;
      })
      //patch cycle
      .addCase(patchWorkingCycleUnit.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(patchWorkingCycleUnit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(patchWorkingCycleUnit.rejected, (state, action) => {
        state.isLoading = false;
      })
      //delete cycle
      .addCase(deleteWorkingCycleUnit.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteWorkingCycleUnit.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteWorkingCycleUnit.rejected, (state, action) => {
        state.isLoading = false;
      })
      //fetch one cycle
      .addCase(fetchSingleWorkingCycle.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchSingleWorkingCycle.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleWorkingCycle.rejected, (state, action) => {
        state.isLoading = false;
      })
      //fetch cycles
      .addCase(fetchWorkingCycles.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchWorkingCycles.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWorkingCycles.rejected, (state, action) => {
        state.isLoading = false;
      })
      //fetch cycles calculate
      .addCase(fetchCalcData.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchCalcData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCalcData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const cycleReducer = cycleSlice.reducer;
