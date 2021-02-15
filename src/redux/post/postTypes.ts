import { OpenSnackbar } from "../snackbars/snackbarsTypes";
import { User } from "../user/userTypes";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const CREATE_NEW_POST = "CREATE_NEW_POST";
export const GET_SUBCAT_POSTS = "GET_SUBCAT_POSTS";
export const GET_USERS_POSTS = "GET_USERS_POSTS"; 
export const GET_POST = "GET_POST";
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
  type: typeof GET_POST,
  payload: Post
};

export interface UpdatePost {
  type: typeof UPDATE_POST,
  payload: Post
}

export interface GetAllPosts {
  type: typeof GET_ALL_POSTS,
  payload: Post[]
};

export interface GetSubcatPosts {
  type: typeof GET_SUBCAT_POSTS,
  payload: Post[]
};

export interface GetUsersPosts {
  type: typeof GET_USERS_POSTS,
  payload: Post[]
};
export interface CreateNewPost {
  type: typeof CREATE_NEW_POST,
};

export type PostDispatchTypes = 
  GetAllPosts |
  GetSubcatPosts |
  GetUsersPosts |
  CreateNewPost |
  GetPost |
  UpdatePost |
  DeletePost |
  OpenSnackbar;