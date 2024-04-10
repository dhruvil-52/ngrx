import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { SHARED_STATE } from "../models/static.model";
import { SharedInterface } from "./shared.state";

const getLoadingStatusValue = createFeatureSelector<SharedInterface>(SHARED_STATE)
export const getLoadingStatus = createSelector(getLoadingStatusValue, (state) => {
    return state.showLoading
})

export const getErrorMessage = createSelector(getLoadingStatusValue, state => {
    return state.errorMessage
})