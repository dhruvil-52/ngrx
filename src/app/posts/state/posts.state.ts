import { Post } from "src/app/shared/models/post.interface"

export interface postInterface {
    posts: Post[]
}

export const initialPostList: postInterface = {
    posts: [
        {
            id: 1,
            title: "title 1",
            description: "description 1"
        },
        {
            id: 2,
            title: "title 2",
            description: "description 2"
        }
    ]
}