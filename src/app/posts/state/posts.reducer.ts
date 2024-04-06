import { createReducer, on } from "@ngrx/store";
import { initialPostList } from "./posts.state";
import { addPost } from "./posts.actions";

const _postReducer = createReducer(initialPostList,
    on(addPost, (state, action) => {
        let data = JSON.parse(JSON.stringify(action.user));
        data.id = state.posts.length + 1;
        return {
            ...state,
            posts: [...state.posts, data]
        }
    })
)
export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}