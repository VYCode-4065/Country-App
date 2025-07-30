import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "Mode Slice",
  initialState: {
    dark: false,
    regionValue:"All"
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.dark = !state.dark;
    },
    enableRegionMode:(state,action)=>{
      state.regionValue = action.payload
    }
  },
});

export const { toggleDarkMode,enableRegionMode } = modeSlice.actions;
export default modeSlice.reducer;
