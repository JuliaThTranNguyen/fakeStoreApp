import { Box, Button, Grow, TextField } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import { Formik } from "formik";
import { useCallback } from "react";

import useStatusBar, {
  FORM_ERROR,
  FORM_LOADING,
  FORM_SUCCESS,
} from "../../hooks/useStatusSelection";
import { LoginType } from "../../types/user";
import { useLogInMutation } from "../../commons/config/fakeStoreApi";
import StyledAuthForm from "../../commons/styles/authentication/StyledAuthForm";
import StyledAuthStatus from "../../commons/styles/authentication/StyledAuthStatus";
import Title from "../../commons/styles/layout/Title";
import handleAsyncProcess from "../../commons/utils/product/handleAsyncProcess";
import { loginSchema } from "../../schemas/loginSchema";

type Props = {
  switchToSignUp: () => void;
};

const initialValues: LoginType = {
  email: "",
  password: "",
};

export default function LogInForm({ switchToSignUp }: Props) {
  const { formState, message, setFormState, setMessage } = useStatusBar();
  const [submit] = useLogInMutation();

  const handleSubmitError = useCallback(
    (error: string) => {
      setFormState(FORM_ERROR);
      setMessage(error);
    },
    [setFormState, setMessage]
  );

  const handleSubmitSuccess = useCallback(
    (reset: () => void) => {
      setFormState(FORM_SUCCESS);
      setMessage("Successfully logged in.");
      reset();
    },
    [setFormState, setMessage]
  );

  const handleSubmit = useCallback(
    async (values: LoginType, reset: () => void) => {
      setFormState(FORM_LOADING);
      await handleAsyncProcess(() => submit(values), {
        onSuccess: () => handleSubmitSuccess(reset),
        onError: handleSubmitError,
        fallbackErrorMsg: "Failed to log in due to a network error.",
      });
    },
    [submit, handleSubmitSuccess, handleSubmitError, setFormState]
  );
  return (
    <Grow in={true}>
      <Box>
        <StyledAuthForm>
          <StyledAuthStatus state={formState}>{message}</StyledAuthStatus>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }
          >
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                <Title variant="h5" sx={{ mb: 3 }}>
                  Log in
                </Title>
                <TextField
                  label="Email"
                  name="email"
                  value={formikProps.values.email}
                  onChange={formikProps.handleChange("email")}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Password"
                  name="password"
                  value={formikProps.values.password}
                  onChange={formikProps.handleChange("password")}
                  type="password"
                />
                <Button
                  type="submit"
                  disabled={!formikProps.dirty || !formikProps.isValid}
                  variant="contained"
                  sx={{ mt: 2 }}
                  endIcon={<LoginOutlined />}
                >
                  Log in
                </Button>
              </form>
            )}
          </Formik>
        </StyledAuthForm>
        <Button
          variant="text"
          onClick={switchToSignUp}
          color="secondary"
          fullWidth
          sx={{ mt: 1 }}
        >
          I don't have an account yet
        </Button>
      </Box>
    </Grow>
  );
}
