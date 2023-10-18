import { BookCategoryInterface } from 'interfaces/book-category';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  description?: string;
  category_status: string;
  created_at?: any;
  updated_at?: any;
  book_category?: BookCategoryInterface[];

  _count?: {
    book_category?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category_status?: string;
}
