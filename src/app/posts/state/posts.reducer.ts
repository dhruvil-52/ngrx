import { createReducer, on } from "@ngrx/store";
import { initialPostList } from "./posts.state";

const _postReducer = createReducer(initialPostList)

export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}