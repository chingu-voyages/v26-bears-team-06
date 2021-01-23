import { Post } from '../../seed/seedData';

export interface Actions {
  type: "CREATE_NEW_POST",
  payload: Post
};

export const createNewPost = (post: Post) => {
  return {
    type: "CREATE_NEW_POST",
    payload: post,
  }
};