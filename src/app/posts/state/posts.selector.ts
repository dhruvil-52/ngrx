import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postInterface } from "./posts.state";
import { Post } from "src/app/shared/models/post.interface";
import { POST_STATE_NAME } from "src/app/shared/models/static.model";

const getPostState = createFeatureSelector<postInterface>(POST_STATE_NAME)

export const getPosts = createSelector(getPostState, (state) => {
    return state.posts;
})

// by leela web dev
export const getPostById = createSelector(getPostState, (state: any, props: any) => {
    let index = state.posts.findIndex((e: Post) => {
        if (e.id == props.id) {
            return true;
        } else {
            return false;
        }
    })
    if (index > -1) {
        return state.posts[index]
    } else {
        return {}
    }
})

// // createSelector is deprecated while passing parameters in above method so you can use below code
// export const getPostById = (props: any) => createSelector(getPosts, (posts: Post[]) => {
//     let index = posts.findIndex((e: Post) => {
//         if (e.id == props.id) {
//             return true;
//         } else {
//             return false;
//         }
//     })
//     if (index > -1) {
//         return posts[index]
//     } else {
//         return {}
//     }
// });