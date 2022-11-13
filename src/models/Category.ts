export interface Category {
  id: number,
  authenticated_description: string,
  unauthenticated_description: string,
  image: string,
  sessions_count: number,
  title: string,
}

export interface CategoryWithSubcategories {
  category: Category,
  is_final_category: boolean,
  subcategories: CategoryWithSubcategories[],
}