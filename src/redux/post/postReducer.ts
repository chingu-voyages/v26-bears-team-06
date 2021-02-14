import {
  Post,
  GET_ALL_POSTS,
  GET_USERS_POSTS,
  GET_SUBCAT_POSTS,
  CREATE_NEW_POST,
  GET_POST,
  DELETE_POST,
  PostDispatchTypes
} from './postTypes'

export interface postState {
  posts: Post[],
  userPosts: Post[],
  subcatPosts: Post[],
  currentPost: Post,
};

export const INITIAL_STATE = {
  posts: [],
  userPosts: [],
  subcatPosts: [],
  currentPost: {} as Post
};

export const postReducer = (state:postState = INITIAL_STATE, action: PostDispatchTypes) => {
  switch(action.type) {
    case GET_ALL_POSTS: 
      return {
        ...state,
        posts: action.payload
      }
    case GET_SUBCAT_POSTS: 
      return {
        ...state,
        subcatPosts: action.payload
      }
    case GET_USERS_POSTS:
      return {
        ...state,
        userPosts: action.payload
      }
    case CREATE_NEW_POST: 
      return {
        ...state,
      }
    case GET_POST:
      return {
        ...state,
        currentPost: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        currentPost: {} as Post
      }
    default: 
      return state
  }
};

export default postReducer;