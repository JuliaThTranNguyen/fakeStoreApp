import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().required('Please provide a password').min(4),
  });