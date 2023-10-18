import { BookInterface } from 'interfaces/book';
import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface BookCategoryInterface {
  id?: string;
  book_id: string;
  category_id: string;
  created_at?: any;
  updated_at?: any;

  book?: BookInterface;
  category?: CategoryInterface;
  _count?: {};
}

export interface BookCategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  book_id?: string;
  category_id?: string;
}
