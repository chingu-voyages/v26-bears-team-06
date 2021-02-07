import {
  Post,
  GET_ALL_POSTS,
  GET_USERS_POSTS,
  GET_SUBCAT_POSTS,
  CREATE_NEW_POST,
  PostDispatchTypes
} from './postTypes'

export interface postState {
  posts: Post[]
};

export const INITIAL_STATE = {
  posts: []
};

export const postReducer = (state:postState = INITIAL_STATE, action: PostDispatchTypes) => {
  switch(action.type) {
    case GET_ALL_POSTS: 
      return {
        ...state,
        posts: action.posts
      }
    case GET_SUBCAT_POSTS: 
      return {
        ...state,
        posts: action.posts
      }
    case GET_USERS_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case CREATE_NEW_POST: 
      return {
        ...state,
      }
    default: 
      return state
  }
};

export default postReducer;