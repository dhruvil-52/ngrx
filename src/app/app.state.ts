import { AuthReducer } from "./auth/state/auth.reducer";
import { authState } from "./auth/state/auth.state";
import { counterReducer } from "./counter/state/counter.reducer";
import { counterInterface } from "./counter/state/counter.state";
import { postReducer } from "./posts/state/posts.reducer";
import { postInterface } from "./posts/state/posts.state";
import { sharedReducer } from "./shared/store/shared.reducer";
import { SharedInterface } from "./shared/store/shared.state";

export interface AppState {
    counter: counterInterface;
    posts: postInterface;
    shared: SharedInterface;
    auth: authState
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer,
    shared: sharedReducer,
    auth:AuthReducer
}