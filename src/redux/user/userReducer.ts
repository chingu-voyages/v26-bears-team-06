import { seedUsers, User } from '../../seed/seedData';
import { Actions } from './userActions';

export interface userState {
  users: User[]
}

export const INITIAL_STATE = {
  users: seedUsers
};

const userReducer = (state:userState = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case "REGISTER_NEW_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
       return state
  }
};

export default userReducer;