import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postInterface, postsAdapter } from './posts.state';
import { Post } from 'src/app/shared/models/post.interface';
import { POST_STATE_NAME } from 'src/app/shared/models/static.model';
import { RouterStateUrl } from 'src/app/router-store/custom-serializer';
import { getCurrentRoute } from 'src/app/router-store/router.selectors';

const getPostState = createFeatureSelector<postInterface>(POST_STATE_NAME);
export const postSelectors = postsAdapter.getSelectors();
/**
 * traditional way
 */
// export const getPosts = createSelector(getPostState, (state) => {
//   return state.posts;
// });
/**
 * by using entity
 */
export const getPosts = createSelector(getPostState, postSelectors.selectAll);
export const getPostEntity = createSelector(getPostState, postSelectors.selectEntities);

// by leela web dev
/**
 * traditional way
 */
// export const getPostById = createSelector(
//   getPostState,
//   (state: any, props: any) => {
//     let index = state.posts.findIndex((e: Post) => {
//       if (e.id == props.id) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (index > -1) {
//       return state.posts[index];
//     } else {
//       return {};
//     }
//   }
// );

/**
 * By using router store we dont need to pass params(Id), because we have id in router store already
 */
// export const getPostById = createSelector(
//   getPosts,
//   getCurrentRoute,
//   (posts, route: RouterStateUrl) => {
//     // here you will get array like [ { id: '1', name: "Dhruvil", age: 24, gender: "Male" }, { id: '2', name: "Aarti", age: 23, gender: "Female" } ]
//     //  however we have entities and ids structure in state
//     console.log("posts", posts)
//     let index = posts.findIndex((e: any) => {
//       if (e.id == route.params['id']) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (index > -1) {
//       return posts[index];
//     } else {
//       return {};
//     }
//   }
// );
/**
 * above code by entity, above code is also working with entity but below code is legal
 */

export const getPostById = createSelector(
  getPostEntity,
  getCurrentRoute,
  (posts, route: RouterStateUrl) => {
    console.log("posts", posts)
    return posts ? posts[route.params['id']] : null;
  }
);

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
