import axios from 'axios';
import { Dispatch } from 'redux';
import { OPEN_SNACKBAR } from '../snackbars/snackbarsTypes';
import {
  Post,
  GET_ALL_POSTS_SUCCESS,
  CREATE_NEW_POST,
  GET_SUBCAT_POSTS_SUCCESS,
  GET_USERS_POSTS_SUCCESS,
  GET_POST_SUCCESS,
  UPDATE_POST,
  PostDispatchTypes,
  DELETE_POST,
  GET_SEARCH_QUERY_POSTS_SUCCESS,
  GET_POST_LOADING,
} from './postTypes';

export const getPost = (postId: number | undefined) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    dispatch({
      type: GET_POST_LOADING
    });
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods/${postId}`)
    dispatch({
      type: GET_POST_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (post: Post, postId: number | undefined, token: string | undefined) => async(dispatch: Dispatch<PostDispatchTypes>) => {
  console.log('PostID:', postId);
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

export const GetAllPostsSuccess = () => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    dispatch({
      type: GET_POST_LOADING
    });
    const res = await axios.get('https://craigs2list-dev.herokuapp.com/goods');
    dispatch({
      type: GET_ALL_POSTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    });
  }
};

export const GetSubcatPostsSuccess = (subcatId: number) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  
  try {
    dispatch({
      type: GET_POST_LOADING
    });
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods?sc=${subcatId}`);
    dispatch({
      type: GET_SUBCAT_POSTS_SUCCESS,
      payload: res.data
    });
    
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    });
  }
};

export const GetSearchQueryPostsSuccess = (searchQuery: string, location: string, subcatSearchQuery: string) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  console.log(`https://craigs2list-dev.herokuapp.com/goods?q=${searchQuery}&loc=${location}&sc=${subcatSearchQuery}`);
  try {
    dispatch({
      type: GET_POST_LOADING
    });
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods?q=${searchQuery}&loc=${location}&${subcatSearchQuery}`);
    dispatch({
      type: GET_SEARCH_QUERY_POSTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    });
  }
};

export const GetUsersPostsSuccess = (userId: number | undefined, token: string | undefined) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    dispatch({
      type: GET_POST_LOADING
    });
    const res = await axios.get(`https://craigs2list-dev.herokuapp.com/goods?uid=${userId}`);
    dispatch({
      type: GET_USERS_POSTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: OPEN_SNACKBAR,
      message: error.message,
      severity: 'error'
    });
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