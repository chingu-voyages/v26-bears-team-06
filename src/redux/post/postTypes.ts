import { OpenSnackbar } from "../snackbars/snackbarsTypes";
import { User } from "../user/userTypes";

export const GET_POST_LOADING = "GET_POST_LOADING";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const CREATE_NEW_POST = "CREATE_NEW_POST";
export const GET_SUBCAT_POSTS_SUCCESS = "GET_SUBCAT_POSTS_SUCCESS";
export const GET_USERS_POSTS_SUCCESS = "GET_USERS_POSTS_SUCCESS"; 
export const GET_SEARCH_QUERY_POSTS_SUCCESS = "GET_SEARCH_QUERY_POSTS_SUCCESS";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export interface Post {
  title: string,
  price: string,
  description: string,
  city: string,
  state: string,
  category_id?: number,
  subcategory_id?: number,
  image_url: string,
  post_id?: number,
  user_id?: number,
  user?: User
};

export interface DeletePost {
  type: typeof DELETE_POST
};
export interface GetPost {
  type: typeof GET_POST_SUCCESS,
  payload: Post
};

export interface UpdatePost {
  type: typeof UPDATE_POST,
  payload: Post
}

export interface GetPostsLoading {
  type: typeof GET_POST_LOADING
}
export interface GetAllPostsSuccess {
  type: typeof GET_ALL_POSTS_SUCCESS,
  payload: Post[]
};

export interface GetSubcatPostsSuccess {
  type: typeof GET_SUBCAT_POSTS_SUCCESS,
  payload: Post[]
};

export interface GetSearchQueryPostsSuccess {
  type: typeof GET_SEARCH_QUERY_POSTS_SUCCESS,
  payload: Post[]
}

export interface GetUsersPostsSuccess {
  type: typeof GET_USERS_POSTS_SUCCESS,
  payload: Post[]
};
export interface CreateNewPost {
  type: typeof CREATE_NEW_POST,
};

export type PostDispatchTypes = 
  GetAllPostsSuccess |
  GetPostsLoading |
  GetSubcatPostsSuccess |
  GetUsersPostsSuccess |
  CreateNewPost |
  GetSearchQueryPostsSuccess |
  GetPost |
  UpdatePost |
  DeletePost |
  OpenSnackbar;