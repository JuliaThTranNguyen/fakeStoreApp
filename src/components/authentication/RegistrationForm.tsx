import { Box, Button, Grow, TextField, Zoom } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Formik } from 'formik';
import { useCallback } from 'react';

import useStatusBar, {
  FORM_ERROR,
  FORM_LOADING,
  FORM_SUCCESS,
} from '../../hooks/useStatusSelection';
import { SignUpType } from '../../types/user';
import { useSignUpMutation } from '../../commons/config/fakeStoreApi';
import handleAsyncProcess from '../../commons/utils/product/handleAsyncProcess';
import StyledAuthForm from '../../commons/styles/authentication/StyledAuthForm';
import StyledAuthStatus from '../../commons/styles/authentication/StyledAuthStatus';
import Title from '../../commons/styles/layout/Title';
import { registrationSchema } from '../../schemas/registrationSchema';

type Props = {
  switchToLogIn: () => void;
};

const initialValues: SignUpType = {
    email: '',
    password: '',
    name: '',
    role: 'customer',
    avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
  };



export default function RegisterationForm({ switchToLogIn }: Props) {
  const { formState, message, setFormState, setMessage } = useStatusBar();
  const [signUp] = useSignUpMutation();

  const onFormSuccess = useCallback(
    (reset: () => void) => {
      setFormState(FORM_SUCCESS);
      setMessage('Successfully signed up!');
      reset();
    },
    [setFormState, setMessage]
  );

  const onError = useCallback(
    (error: string) => {
      setFormState(FORM_ERROR);
      setMessage(error);
    },
    [setFormState, setMessage]
  );

  const handleSubmit = useCallback(
    async (values: SignUpType, reset: () => void) => {
      setFormState(FORM_LOADING);
      await handleAsyncProcess(() => signUp(values), {
        onSuccess: () => onFormSuccess(reset),
        onError: onError,
        fallbackErrorMsg: 'Failed to sign up due to a network error.',
      });
    },
    [setFormState, signUp, onError, onFormSuccess]
  );
  return (
    <Grow in={true}>
      <Box>
        <StyledAuthForm>
          <StyledAuthStatus state={formState}>{message}</StyledAuthStatus>
          <Formik
            initialValues={initialValues}
            validationSchema={registrationSchema}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }
          >
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                <Title variant="h5" sx={{ mb: 3 }}>
                  Sign up
                </Title>
                <TextField
                  label="Name"
                  name="name"
                  value={formikProps.values.name}
                  onChange={formikProps.handleChange('name')}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formikProps.values.email}
                  onChange={formikProps.handleChange('email')}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Password"
                  name="password"
                  value={formikProps.values.password}
                  onChange={formikProps.handleChange('password')}
                  type="password"
                  sx={{ mb: 2 }}
                />
                <Box className="section">
                  <TextField
                    fullWidth
                    label="Avatar URL"
                    name="avatar"
                    value={formikProps.values.avatar}
                    onChange={formikProps.handleChange('avatar')}
                  />
                  {!formikProps.errors.avatar && (
                    <Zoom in={!formikProps.errors.avatar}>
                      <img
                        src={formikProps.values.avatar}
                        alt="avatar"
                        className="avatar"
                      />
                    </Zoom>
                  )}
                </Box>
                <Button
                  type="submit"
                  disabled={!formikProps.dirty || !formikProps.isValid}
                  variant="contained"
                  endIcon={<SaveIcon />}
                  sx={{ mt: 2 }}
                >
                  Save & Submit
                </Button>
              </form>
            )}
          </Formik>
        </StyledAuthForm>
        <Button
          variant="text"
          onClick={switchToLogIn}
          color="secondary"
          fullWidth
          sx={{ mt: 1 }}
        >
          I already have an account
        </Button>
      </Box>
    </Grow>
  );
}
