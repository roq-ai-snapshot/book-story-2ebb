import * as yup from 'yup';

export const publisherValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  publisher_status: yup.string().nullable(),
  publisher_type: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
