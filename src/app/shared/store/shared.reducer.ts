import { createReducer, on } from "@ngrx/store"
import { intialState } from "./shared.state"
import { setErrorMessage, setLoadingSpinner } from "./shared.actions"

const _sharedReducer = createReducer(intialState,
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status
        }
    }), on(setErrorMessage, (state, action) => {
        console.log(action)
        return {
            ...state,
            errorMessage: action.msg
        }
    })
)

export function sharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}