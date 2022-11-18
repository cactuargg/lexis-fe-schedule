import { ICategory, ICategoryWithSubcategories } from '../models';

export function flattenCategories(categories: ICategoryWithSubcategories[]) {
  const flat: ICategory[] = [];
  categories.forEach(({ category, is_final_category, subcategories }) => {
    if (is_final_category) {
      flat.push(category);
    } else {
      flat.push(...flattenCategories(subcategories));
    }
  });
  return flat;
}
