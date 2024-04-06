import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterInterface } from "./counter.state";
import { COUNTER_STATE_NAME } from "src/app/shared/models/static.model";

const getCounterState = createFeatureSelector<counterInterface>(COUNTER_STATE_NAME);

export const getcounter = createSelector(getCounterState, (state) => {
    return state.counter;
})