import { createAction, props } from "@ngrx/store";

export const setLoadingSpinner = createAction('set Loading Spinner', props<{ status: boolean }>());
export const setErrorMessage = createAction('set Error message', props<{ msg: string }>())