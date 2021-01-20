import { User } from "../../seed/seedData"

export interface Actions {
  type: "REGISTER_NEW_USER",
  payload: User
}

export const registerNewUser = (user: User) => {
  return {
    type: "REGISTER_NEW_USER",
    payload: user,
  }
}