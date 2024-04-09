import { createAction, props } from "@ngrx/store";

export const setLoadingSpinner = createAction('setLoadingSpinner', props<{ status: boolean }>())