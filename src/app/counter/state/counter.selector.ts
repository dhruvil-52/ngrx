import { createFeatureSelector, createSelector } from "@ngrx/store";
import { stateInterface } from "./counter.state";

const getCounterState = createFeatureSelector<stateInterface>('counter');

export const getcounter = createSelector(getCounterState, (state) => {
    return state.counter;
})