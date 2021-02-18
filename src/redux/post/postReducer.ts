import {
  Post,
  GET_POST_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_USERS_POSTS_SUCCESS,
  GET_SUBCAT_POSTS_SUCCESS,
  GET_SEARCH_QUERY_POSTS_SUCCESS,
  CREATE_NEW_POST,
  GET_POST_SUCCESS,
  DELETE_POST,
  PostDispatchTypes
} from './postTypes'

export interface postState {
  posts: Post[],
  userPosts: Post[],
  subcatPosts: Post[],
  searchQueryPosts: Post[],
  currentPost: Post,
  loading: boolean
};

export const INITIAL_STATE = {
  posts: [],
  userPosts: [],
  subcatPosts: [],
  searchQueryPosts: [],
  currentPost: {} as Post,
  loading: false
};

export const postReducer = (state:postState = INITIAL_STATE, action: PostDispatchTypes) => {
  switch(action.type) {
    case GET_POST_LOADING:
     return {
        ...state,
        loading: true
      }
    case GET_ALL_POSTS_SUCCESS: 
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    case GET_SUBCAT_POSTS_SUCCESS: 
      return {
        ...state,
        subcatPosts: action.payload,
        loading: false
      }
    case GET_SEARCH_QUERY_POSTS_SUCCESS: 
      return {
        ...state,
        searchQueryPosts: action.payload,
        loading: false
      }
    case GET_USERS_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
        loading: false
      }
    case CREATE_NEW_POST: 
      return {
        ...state,
      }
    case GET_POST_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
        loading: false
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