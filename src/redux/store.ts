// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./elementsSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    elements: elementsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
