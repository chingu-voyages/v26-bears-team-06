import { seedPosts, Post } from '../../seed/seedData';
import { Actions } from './postActions';

export interface postState {
  posts: Post[]
};

export const INITIAL_STATE = {
  posts: seedPosts
};

export const postReducer = (state:postState = INITIAL_STATE, action: Actions) => {
  switch(action.type) {
    case "CREATE_NEW_POST":
      return {
        ...state,
        posts: [...seedPosts, action.payload]
      }
    default: 
      return state
  }
};

export default postReducer;