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
import { authReducer, authSlice } from "./auth/authSlice";
import { cycleReducer } from "./cycle/cycleSlice";
import { settingsReducer } from "./settings/settingsSlice";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["token"],
};

// const rootReducer = combineReducers({
//   [authSlice.name]: authSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    settings: settingsReducer,
    cycle: cycleReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
