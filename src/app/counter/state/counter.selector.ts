import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterInterface } from "./counter.state";

const getCounterState = createFeatureSelector<counterInterface>('counter');

export const getcounter = createSelector(getCounterState, (state) => {
    return state.counter;
})