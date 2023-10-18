import * as yup from 'yup';

export const bookCategoryValidationSchema = yup.object().shape({
  book_id: yup.string().nullable().required(),
  category_id: yup.string().nullable().required(),
});
