import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { authSlice } from "./auth/authSlice";
import { cycleReducer } from "./cycle/cycleSlice";
import { settingsReducer } from "./settings/settingsSlice";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  // whitelist: ["auth.token"],
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    settings: settingsReducer,
    cycle: cycleReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
