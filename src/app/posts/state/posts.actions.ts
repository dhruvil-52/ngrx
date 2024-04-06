import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/shared/models/post.interface";

export const addPost = createAction('addPost', props<{ user: Post }>());
export const deletePost = createAction('deletePost', props<{ userId: number }>())
