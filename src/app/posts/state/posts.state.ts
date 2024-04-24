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
export interface postInterface extends EntityState<Post> {
    // if you want to add another new field except post array
    noOfUsers: number;
};
export const postsAdapter = createEntityAdapter<Post>({
    // below not neccesary because ngrx consider id by default selectId,
    // below line for set another selectId like id, userId etc,
    selectId: (post: Post) => post.id,
    // for checking sorting, add new post
    sortComparer: sortByName,
});

export const initialPostList: postInterface = postsAdapter.getInitialState(
    {
        // if you want set defualt value of new field;
        noOfUsers: 2,
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

export function sortByName(a: Post, b: Post): number {
    return a.name.localeCompare(b.name)
}