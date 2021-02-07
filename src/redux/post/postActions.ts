import axios from 'axios';
import { Dispatch } from 'redux';
import { OPEN_SNACKBAR } from '../snackbars/snackbarsTypes';
import {
  Post,
  GET_ALL_POSTS,
  CREATE_NEW_POST,
  GET_SUBCAT_POSTS,
  GET_USERS_POSTS,
  PostDispatchTypes,
} from './postTypes';

export const getAllPosts = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get('https://craigs2list-dev.herokuapp.com/goods');
    dispatch({
      type: GET_ALL_POSTS,
      posts: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSubcatPosts = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get('');
    dispatch({
      type: GET_SUBCAT_POSTS,
      posts: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsersPosts = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get('');
    dispatch({
      type: GET_USERS_POSTS,
      posts: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = (post: Post) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.post('https://craigs2list-dev.herokuapp.com/goods', post);
    console.log('Post:', post);
    console.log(res);
    dispatch({
      type: CREATE_NEW_POST,
      post: res.data
    });
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Post Created',
      severity: 'success'
    })
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Error creating post',
      severity: 'error'
    })
    console.log(error)
  }
};