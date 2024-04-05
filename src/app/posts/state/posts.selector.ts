import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postInterface } from "./posts.state";

const getPostState = createFeatureSelector<postInterface>('posts')

export const getPosts = createSelector(getPostState, (state) => {
    return state.posts;
})