import { BookCategoryInterface } from 'interfaces/book-category';
import { ReviewInterface } from 'interfaces/review';
import { PublisherInterface } from 'interfaces/publisher';
import { GetQueryInterface } from 'interfaces';

export interface BookInterface {
  id?: string;
  title: string;
  author: string;
  published_date?: any;
  publisher_id: string;
  genre: string;
  language: string;
  page_count: number;
  created_at?: any;
  updated_at?: any;
  book_category?: BookCategoryInterface[];
  review?: ReviewInterface[];
  publisher?: PublisherInterface;
  _count?: {
    book_category?: number;
    review?: number;
  };
}

export interface BookGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  author?: string;
  publisher_id?: string;
  genre?: string;
  language?: string;
}
