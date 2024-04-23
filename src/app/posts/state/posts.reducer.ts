import { createReducer, on } from "@ngrx/store";
import { initialPostList, postsAdapter } from "./posts.state";
import { addPost, deletePost } from "./posts.actions";
import { Post } from "src/app/shared/models/post.interface";

const _postReducer = createReducer(initialPostList,
    on(addPost, (state, action) => {
        let data = JSON.parse(JSON.stringify(action.user));
        // let posts = JSON.parse(JSON.stringify(state.posts));
        // if (data.id) {
        //     let index = posts.findIndex((e: Post) => {
        //         if (e.id == data.id) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     })
        //     if (index > -1) {
        //         console.log(posts[index], index)
        //         posts[index] = data;
        //     }
        //     return {
        //         ...state,
        //         posts: posts
        //     }
        // } else {
        //     data.id = posts.length + 1;
        //     return {
        //         ...state,
        //         posts: [...posts, data]
        //     }
        // }
        if (data.id) {
            // below format we need to give to update entity, check structure in post state
            let updatedData = {
                id: data.id,
                changes: { ...data }
            }
            return postsAdapter.updateOne(updatedData, state);
        } else {
            data.id = Object.keys(state.entities).length + 1;
            return postsAdapter.addOne(data, state);
        }
    }), on(deletePost, (state, action) => {
        // let id = action.userId;
        // let posts = JSON.parse(JSON.stringify(state.posts));
        // let index = posts.findIndex((e: Post) => {
        //     if (e.id == id) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });
        // if (index > -1) {
        //     posts.splice(index, 1);
        // }
        // return {
        //     ...state,
        //     posts: posts
        // }
        return postsAdapter.removeOne(action.userId, state)
    })
)
export function postReducer(state: any, action: any) {
    return _postReducer(state, action)
}