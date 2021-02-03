import { CategoryType, CategoriesDispatchTypes, CATEGORIES_LOADING, CATEGORIES_FAILED, CATEGORIES_SUCCESS } from './categoryTypes';

export interface categoryState {
  loading: boolean,
  categories?: CategoryType[],
  errorMsg?: string
};

const INITIAL_STATE: categoryState ={
  loading: false
}

export const categoryReducer = (state: categoryState = INITIAL_STATE, action: CategoriesDispatchTypes) => {
  switch(action.type){
    case CATEGORIES_LOADING:
      return{
        ...state,
        loading: true
      }
    case CATEGORIES_SUCCESS: 
      return {
        ...state,
        loading: false,
        categories: action.payload,
      }
    case CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        errorMsg: 'failed to load',
      }
    default: 
      return state
  }
}