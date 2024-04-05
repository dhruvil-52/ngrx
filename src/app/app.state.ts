import { counterReducer } from "./counter/state/counter.reducer";
import { counterInterface } from "./counter/state/counter.state";
import { postReducer } from "./posts/state/posts.reducer";
import { postInterface } from "./posts/state/posts.state";

export interface AppState {
    counter: counterInterface,
    posts: postInterface
}

export const appReducer = {
    counter: counterReducer,
    posts: postReducer
}