const { createSlice } = require("@reduxjs/toolkit");

import {
  createNewGeneralSetting,
  createNewSettingGenerator,
  fetchGeneralSetting,
  fetchGeneratorSetting,
  fetchUserData,
  patchGeneralSetting,
  patchingSettingsGenerator,
} from "./settingsOperations";

const initialState = {
  brand: null,
  type: null,
  firstChangeOilReglament: null,
  nextChangeOilReglament: null,
  electricalPower: null,
  dataFirstStart: null,
  workingFirsStart: null,
  oilVolume: null,
  fuelVolume: null,
  idGenerator: null,
  isLoading: false,
  isSettingPresent: false,

  priceOfOil: null,
  priceOfGasoline: null,
  priceOfElectrical: null,
  idGeneral: null,
  isGeneralSettingPreset: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  extraReducers: (builder) => {
    builder
      //fetch User Settings
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
      })
      //fetch Generator Settings
      .addCase(fetchGeneratorSetting.fulfilled, (state, action) => {
        state.brand = action.payload.settingGenerator.data.brand;
        state.type = action.payload.settingGenerator.data.type;
        state.firstChangeOilReglament =
          action.payload.settingGenerator.data.firstChangeOilReglament;
        state.nextChangeOilReglament =
          action.payload.settingGenerator.data.nextChangeOilReglament;
        state.electricalPower =
          action.payload.settingGenerator.data.electricalPower;
        state.dataFirstStart =
          action.payload.settingGenerator.data.dataFirstStart;
        state.workingFirsStart =
          action.payload.settingGenerator.data.workingFirsStart;
        state.oilVolume = action.payload.settingGenerator.data.oilVolume;
        state.fuelVolume = action.payload.settingGenerator.data.fuelVolume;
        state.idGenerator = action.payload.settingGenerator.data._id;
        state.isLoading = false;
        state.isSettingPresent = true;
      })
      .addCase(fetchGeneratorSetting.pending, (state, action) => {
        state.isLoading = true;
        state.isSettingPresent = false;
      })
      .addCase(fetchGeneratorSetting.rejected, (state, action) => {
        state.brand = null;
        state.type = null;
        state.firstChangeOilReglament = null;
        state.nextChangeOilReglament = null;
        state.electricalPower = null;
        state.dataFirstStart = null;
        state.workingFirsStart = null;
        state.oilVolume = null;
        state.fuelVolume = null;
        state.idGenerator = null;
        state.isLoading = false;
        state.isSettingPresent = false;
      })
      //create new generator settings
      .addCase(createNewSettingGenerator.fulfilled, (state, action) => {
        state.brand = action.payload.settingGenerator.data.brand;
        state.type = action.payload.settingGenerator.data.type;
        state.firstChangeOilReglament =
          action.payload.settingGenerator.data.firstChangeOilReglament;
        state.nextChangeOilReglament =
          action.payload.settingGenerator.data.nextChangeOilReglament;
        state.electricalPower =
          action.payload.settingGenerator.data.electricalPower;
        state.dataFirstStart =
          action.payload.settingGenerator.data.dataFirstStart;
        state.workingFirsStart =
          action.payload.settingGenerator.data.workingFirsStart;
        state.oilVolume = action.payload.settingGenerator.data.oilVolume;
        state.fuelVolume = action.payload.settingGenerator.data.fuelVolume;
        state.idGenerator = action.payload.settingGenerator.data._id;
        state.isLoading = false;
        state.isSettingPresent = true;
      })
      .addCase(createNewSettingGenerator.pending, (state, action) => {
        state.isLoading = true;
        state.isSettingPresent = false;
      })
      .addCase(createNewSettingGenerator.rejected, (state, action) => {
        state.brand = null;
        state.type = null;
        state.firstChangeOilReglament = null;
        state.nextChangeOilReglament = null;
        state.electricalPower = null;
        state.dataFirstStart = null;
        state.workingFirsStart = null;
        state.oilVolume = null;
        state.fuelVolume = null;
        state.idGenerator = null;
        state.isLoading = false;
        state.isSettingPresent = false;
      })
      //patching generator settings
      .addCase(patchingSettingsGenerator.fulfilled, (state, action) => {
        state.brand = action.payload.settingGenerator.data.brand;
        state.type = action.payload.settingGenerator.data.type;
        state.firstChangeOilReglament =
          action.payload.settingGenerator.data.firstChangeOilReglament;
        state.nextChangeOilReglament =
          action.payload.settingGenerator.data.nextChangeOilReglament;
        state.electricalPower =
          action.payload.settingGenerator.data.electricalPower;
        state.dataFirstStart =
          action.payload.settingGenerator.data.dataFirstStart;
        state.workingFirsStart =
          action.payload.settingGenerator.data.workingFirsStart;
        state.oilVolume = action.payload.settingGenerator.data.oilVolume;
        state.fuelVolume = action.payload.settingGenerator.data.fuelVolume;
        state.idGenerator = action.payload.settingGenerator.data._id;
        state.isLoading = false;
        state.isSettingPresent = true;
      })
      .addCase(patchingSettingsGenerator.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(patchingSettingsGenerator.rejected, (state, action) => {
        state.brand = null;
        state.type = null;
        state.firstChangeOilReglament = null;
        state.nextChangeOilReglament = null;
        state.electricalPower = null;
        state.dataFirstStart = null;
        state.workingFirsStart = null;
        state.oilVolume = null;
        state.fuelVolume = null;
        state.idGenerator = null;
        state.isLoading = false;
      })
      //fetch General settings
      .addCase(fetchGeneralSetting.fulfilled, (state, action) => {
        state.priceOfOil = action.payload.generalSettings.data.priceOfOil;
        state.priceOfGasoline =
          action.payload.generalSettings.data.priceOfGasoline;
        state.priceOfElectrical =
          action.payload.generalSettings.data.priceOfElectrical;
        state.idGeneral = action.payload.generalSettings.data._id;
        state.isLoading = false;
        state.isGeneralSettingPreset = true;
      })
      .addCase(fetchGeneralSetting.pending, (state, action) => {
        state.isLoading = true;
        state.isGeneralSettingPreset = false;
      })
      .addCase(fetchGeneralSetting.rejected, (state, action) => {
        state.priceOfOil = null;
        state.priceOfGasoline = null;
        state.priceOfElectrical = null;
        state.idGeneral = null;
        state.isLoading = false;
        state.isGeneralSettingPreset = false;
      })
      //create new general settings
      .addCase(createNewGeneralSetting.fulfilled, (state, action) => {
        state.priceOfOil = action.payload.generalSettings.data.priceOfOil;
        state.priceOfGasoline =
          action.payload.generalSettings.data.priceOfGasoline;
        state.priceOfElectrical =
          action.payload.generalSettings.data.priceOfElectrical;
        state.idGeneral = action.payload.generalSettings.data._id;
        state.isLoading = false;
        state.isGeneralSettingPreset = true;
      })
      .addCase(createNewGeneralSetting.pending, (state, action) => {
        state.isLoading = true;
        state.isGeneralSettingPreset = false;
      })
      .addCase(createNewGeneralSetting.rejected, (state, action) => {
        state.priceOfOil = null;
        state.priceOfGasoline = null;
        state.priceOfElectrical = null;
        state.idGeneral = null;
        state.isLoading = false;
        state.isGeneralSettingPreset = false;
      })
      //patch general settings
      .addCase(patchGeneralSetting.fulfilled, (state, action) => {
        state.priceOfOil = action.payload.generalSetting.data.priceOfOil;
        state.priceOfGasoline =
          action.payload.generalSetting.data.priceOfGasoline;
        state.priceOfElectrical =
          action.payload.generalSetting.data.priceOfElectrical;
        state.idGeneral = action.payload.generalSetting.data._id;
        state.isLoading = false;
        state.isGeneralSettingPreset = true;
      })
      .addCase(patchGeneralSetting.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(patchGeneralSetting.rejected, (state, action) => {
        state.priceOfOil = null;
        state.priceOfGasoline = null;
        state.priceOfElectrical = null;
        state.idGeneral = null;
        state.isLoading = false;
      });
  },
});

export const settingsReducer = settingsSlice.reducer;
