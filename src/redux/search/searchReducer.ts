import { Subcategory } from "../../seed/seedData";
import { Actions } from "./searchActions";

export interface searchState {
  subcategories: Subcategory[] 
};

const INITIAL_STATE = {
  subcategories: []
};

export const searchReducer = (state: searchState = INITIAL_STATE, action: Actions) => {
  switch(action.type){
    case "SET_SUBCATEGORY":
      return {
        ...state,
        subcategories: [...state.subcategories, action.payload]
      }
  }
};