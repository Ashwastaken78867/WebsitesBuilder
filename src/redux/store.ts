// src/redux/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import elementsReducer from "./elementsSlice";
import uiReducer from "./uiSlice";

// 🔹 Combine all reducers
const rootReducer = combineReducers({
  elements: elementsReducer,
  ui: uiReducer,
});

// 🔹 Persist config
const persistConfig = {
  key: "builderState", // storage key
  storage,
};

// 🔹 Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🔹 Configure store with middleware adjustments
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 🔹 Create persistor
export const persistor = persistStore(store);

// ✅ Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
