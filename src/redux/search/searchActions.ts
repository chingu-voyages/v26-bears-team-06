import { Subcategory } from '../../seed/seedData';

export interface Actions {
  type: "SET_SUBCATEGORY",
  payload: Subcategory | Subcategory[] | null,
}