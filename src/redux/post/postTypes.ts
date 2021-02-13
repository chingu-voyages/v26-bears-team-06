import { OpenSnackbar } from "../snackbars/snackbarsTypes";
import { User } from "../user/userTypes";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const CREATE_NEW_POST = "CREATE_NEW_POST";
export const GET_SUBCAT_POSTS = "GET_SUBCAT_POSTS";
export const GET_USERS_POSTS = "GET_USERS_POSTS"; 
export interface Post {
  title: string,
  price: string,
  description: string,
  location: string,
  category: string,
  subcategory: string,
  image_url: string,
  id?: number,
};

export interface GetAllPosts {
  type: typeof GET_ALL_POSTS,
  posts: Post[]
};

export interface GetSubcatPosts {
  type: typeof GET_SUBCAT_POSTS,
  posts: Post[]
};

export interface GetUsersPosts {
  type: typeof GET_USERS_POSTS,
  posts: Post[]
};
export interface CreateNewPost {
  type: typeof CREATE_NEW_POST,
};

export type PostDispatchTypes = 
  GetAllPosts |
  GetSubcatPosts |
  GetUsersPosts |
  CreateNewPost |
  OpenSnackbar;