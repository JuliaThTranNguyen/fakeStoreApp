import * as yup from 'yup'

export const registrationSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().required('Please provide a password').min(4),
    name: yup.string().required('How should we call you?').min(2),
    avatar: yup
      .string()
      .url('Please provide a valid URL')
      .required('Please provide an avatar'),
  });