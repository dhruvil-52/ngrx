import { Post } from "src/app/shared/models/post.interface"

export interface postInterface {
    posts: Post[]
}

export const initialPostList: postInterface = {
    posts: [
        {
            id: 1,
            name: "Dhruvil",
            age: 24,
            gender: "Male"
        },
        {
            id: 2,
            name: "Aarti",
            age: 23,
            gender: "Female"
        }
    ]
}