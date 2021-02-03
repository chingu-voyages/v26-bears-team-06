import axios from 'axios';
import { Dispatch } from 'redux';
import { CategoriesDispatchTypes, CATEGORIES_LOADING, CATEGORIES_SUCCESS, CATEGORIES_FAILED } from './categoryTypes';

export const getCategories = () => async (dispatch: Dispatch<CategoriesDispatchTypes>) => {
  try {
    dispatch({
      type: CATEGORIES_LOADING
    });

    const res = await axios.get('https://craigs2list-dev.herokuapp.com/categories');

    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: res.data
    });

  } catch(error) {
    dispatch({
      type: CATEGORIES_FAILED
    })
  }
};
