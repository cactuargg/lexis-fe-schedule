export interface ICategory {
  id: number;
  authenticated_description: string;
  unauthenticated_description: string;
  image: string;
  sessions_count: number;
  title: string;
}

export interface ICategoryWithSubcategories {
  category: ICategory;
  is_final_category: boolean;
  subcategories: ICategoryWithSubcategories[];
}
