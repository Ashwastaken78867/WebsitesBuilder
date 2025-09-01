import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Block {
  id: string;
  type: "text" | "image" | "button" | "header" | "footer";
  content?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  [key: string]: any;
}

interface ElementsState {
  blocks: Block[];
}

const initialState: ElementsState = {
  blocks: [],
};

const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      state.blocks.push(action.payload);
    },
    updateBlock: (
      state,
      action: PayloadAction<Partial<Block> & { id: string }>
    ) => {
      const block = state.blocks.find((b) => b.id === action.payload.id);
      if (!block) return;
      Object.assign(block, action.payload);
    },
    deleteBlock: (state, action: PayloadAction<string>) => {
      state.blocks = state.blocks.filter((b) => b.id !== action.payload);
    },
    clearBlocks: (state) => {
      state.blocks = [];
    },
  },
});

export const { addBlock, updateBlock, deleteBlock, clearBlocks } =
  elementsSlice.actions;

export default elementsSlice.reducer;
