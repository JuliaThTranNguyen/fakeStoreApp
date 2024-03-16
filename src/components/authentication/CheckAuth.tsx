import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

import Title from '../../commons/styles/layout/Title';
import LogInForm from './LoginForm';
import RegisterationForm from './RegistrationForm';


const LOGIN = 'LOGIN';
const REGISTER = 'SIGNUP';

type AUTH_FORM = typeof LOGIN | typeof REGISTER;

export default function CheckAuth() {
  const [currentForm, setCurrentForm] = useState<AUTH_FORM>(LOGIN);
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container>
        <Title variant="h1" sx={{ marginY: 8 }} textAlign="center">
          Knock-knock. Who's there?
        </Title>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            {currentForm === LOGIN && (
              <LogInForm switchToSignUp={() => setCurrentForm(REGISTER)} />
            )}
            {currentForm === REGISTER && (
              <RegisterationForm switchToLogIn={() => setCurrentForm(LOGIN)} />
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
