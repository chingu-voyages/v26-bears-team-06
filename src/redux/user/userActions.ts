import { User } from "../../seed/seedData"

export interface Actions {
  type: "REGISTER_NEW_USER" | "SET_CURRENT_USER",
  payload: User
}

export const registerNewUser = (user: User) => {
  return {
    type: "REGISTER_NEW_USER",
    payload: user,
  }
};

export const setCurrentUser = (user: User) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  }
}