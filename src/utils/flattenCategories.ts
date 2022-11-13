import { Category, CategoryWithSubcategories } from '../models';

export function flattenCategories(categories: CategoryWithSubcategories[]) {
  const flat: Category[] = [];
  categories.forEach(({ category, is_final_category, subcategories }) => {
    if (is_final_category) {
      flat.push(category);
    } else {
      flat.push(...flattenCategories(subcategories));
    }
  });
  return flat;
}