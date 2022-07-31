import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channel: 5,
  volume: 10
};

export const switchesSlice = createSlice({
  name: "switches",
  initialState,
  reducers: {
    increaseChannelValue: (state) => {
      state.channel = state.channel + 1;
    },
    decreaseChannelValue: (state) => {
      state.channel = state.channel - 1;
    },
    increaseVolumeValue: (state) => {
      state.volume = state.volume + 1;
    },
    decreaseVolumeValue: (state) => {
      state.volume = state.volume - 1;
    }
  }
});

export const {
  increaseChannelValue,
  decreaseChannelValue,
  increaseVolumeValue,
  decreaseVolumeValue
} = switchesSlice.actions;

export default switchesSlice.reducer;
