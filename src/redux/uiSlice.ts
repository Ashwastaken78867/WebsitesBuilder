// src/redux/uiSlice.ts
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  selectedId: string | null;
}

const initialState: UIState = {
  selectedId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    selectComponent: (state, action: PayloadAction<string | null>) => {
      state.selectedId = action.payload;
    },
    clearSelection: (state) => {
      state.selectedId = null;
    },
  },
});

export const { selectComponent, clearSelection } = uiSlice.actions;
export default uiSlice.reducer;
