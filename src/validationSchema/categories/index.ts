import * as yup from 'yup';

export const categoryValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  category_status: yup.string().required(),
});
