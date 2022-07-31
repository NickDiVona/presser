import { createSelector } from "@reduxjs/toolkit";

// main
export const switchesSelector = (state) => state.switches;

//
export const channelValue = createSelector(switchesSelector, (state) => state.channel);

export const volumeValue = createSelector(switchesSelector, (state) => state.volume);
