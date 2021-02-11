export const CATEGORIES_LOADING = "CATEGORIES_LOADING";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_FAILED = "CATEGORIES_FAILED";

export interface Subcategory {
  subcategory_id: number,
  name: string,
};

export interface CategoryType {
  category_id: number,
  name: string,
  subcategories: Subcategory[]
};

export interface CategoriesLoading {
  type: typeof CATEGORIES_LOADING,
};

export interface CategoriesFailed {
  type: typeof CATEGORIES_FAILED
};

export interface CategoriesSuccess {
  type: typeof CATEGORIES_SUCCESS,
  payload: CategoryType[]
};

export type CategoriesDispatchTypes = CategoriesLoading | CategoriesSuccess | CategoriesFailed
