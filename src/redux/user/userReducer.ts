import { seedUsers, User } from '../../seed/seedData';
import { Actions } from './userActions';

export interface userState {
  users: User[],
  currentUser: User | null,
}

export const INITIAL_STATE = {
  users: seedUsers,
  currentUser: 
  {
    name: "David M. Motley",
    email: "DavidMMotley@teleworm.us",
    password: "mypassword",
    city: "Los Angeles",
    state: "CA",
    zip: "90071",
  },
};

const userReducer = (state:userState = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case "REGISTER_NEW_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      }
    default:
       return state
  }
};

export default userReducer;