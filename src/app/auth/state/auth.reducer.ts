import { createReducer, on } from "@ngrx/store"
import { intialAuthState } from "./auth.state"
import { loginSuccess } from "./auth.actions";

const _authReducer = createReducer(intialAuthState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    })
);

export function AuthReducer(state: any, action: any) {
    return _authReducer(state, action)
}