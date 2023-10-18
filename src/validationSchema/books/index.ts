import * as yup from 'yup';

export const bookValidationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  published_date: yup.date().nullable(),
  genre: yup.string().required(),
  language: yup.string().required(),
  page_count: yup.number().integer().required(),
  publisher_id: yup.string().nullable().required(),
});
