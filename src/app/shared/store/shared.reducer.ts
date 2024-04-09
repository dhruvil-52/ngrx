import { createReducer, on } from "@ngrx/store"
import { intialState } from "./shared.state"
import { setLoadingSpinner } from "./shared.actions"

const _sharedReducer = createReducer(intialState,
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status
        }
    })
)

export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}