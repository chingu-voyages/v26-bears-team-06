import axios from 'axios';
import { Dispatch } from 'redux';
import { OPEN_SNACKBAR } from '../snackbars/snackbarsTypes';
import {
  Post,
  GET_ALL_POSTS,
  CREATE_NEW_POST,
  GET_SUBCAT_POSTS,
  GET_USERS_POSTS,
  GET_POST,
  UPDATE_POST,
  PostDispatchTypes,
  DELETE_POST,
} from './postTypes';

export const getPost = (postId: number | undefined) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods/${postId}`)
    dispatch({
      type: GET_POST,
      payload: res.data
    })
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (post: Post, postId: number | undefined, token: string | undefined) => async(dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await axios.patch(`https://craigs2list-dev.herokuapp.com/goods/${postId}`, post, config);

    dispatch({
      type: UPDATE_POST,
      payload: res.data
    });

    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Edits Successful',
      severity: 'success'
    });

  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    });
  }
};

export const deletePost = (postId: number | undefined, token: string | undefined) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    await axios.delete(`https://craigs2list-dev.herokuapp.com/goods/${postId}`, config);

    dispatch({
      type: DELETE_POST
    });

    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Delete Successful',
      severity: 'success'
    });

  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    });
  }
};

export const getAllPosts = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get('https://craigs2list-dev.herokuapp.com/goods');
    dispatch({
      type: GET_ALL_POSTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSubcatPosts = (subcatId: number) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods?sc=${subcatId}`);
    dispatch({
      type: GET_SUBCAT_POSTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsersPosts = (userId: number | undefined, token: string | undefined) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods?uid=${userId}`);
    dispatch({
      type: GET_USERS_POSTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = (post: Post, token: string | undefined) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  console.log('Post:', post, 'token:', token );
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await axios.post('https://craigs2list-dev.herokuapp.com/goods', post, config);
    
    console.log(res);
    dispatch({
      type: CREATE_NEW_POST,
    });
    dispatch({
      type: OPEN_SNACKBAR,
      message: 'Post Created',
      severity: 'success'
    })
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    })
    console.log(error)
  }
};