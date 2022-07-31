import { createSelector } from "@reduxjs/toolkit";

// main
export const counterSelector = (state) => state.counter;

//
export const countSelector = createSelector(counterSelector, (state) => state.count);
