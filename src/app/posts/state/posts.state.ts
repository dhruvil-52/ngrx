import { EntityState, createEntityAdapter } from "@ngrx/entity"
import { Post } from "src/app/shared/models/post.interface"

/**
 * traditional way
 */
// export interface postInterface {
//     posts: Post[]
// }

/**
 * by using entity
 */
export interface postInterface extends EntityState<Post> { };
export const postsAdapter = createEntityAdapter<Post>();

export const initialPostList: postInterface = postsAdapter.getInitialState(
    {
        entities: {
            '1': {
                id: 1,
                name: "Dhruvil",
                age: 24,
                gender: "Male"
            },
            '2': {
                id: 2,
                name: "Aarti",
                age: 23,
                gender: "Female"
            },
        },
        ids: ['1', '2']
    }
);