import {
    LogoutOutlined,
    SentimentVeryDissatisfiedOutlined,
  } from '@mui/icons-material';
  import _ from 'lodash';
  import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography,
  } from '@mui/material';
  import { useDispatch, useSelector } from 'react-redux';

import { JwtType } from '../../types/user';
import { useGetProfileQuery } from '../../commons/config/fakeStoreApi';
import { AppDispatch, RootState } from '../../redux/store';
import { logOut, selectUser } from '../../redux/reducers/authSlice';
import StyledCenterContainer from '../../commons/styles/layout/StyledCenterContainer';
import Title from '../../commons/styles/layout/Title';
import StyledProfileContainer from '../../commons/styles/authenticated/StyledProfileContainer';
import StyledAvatar from '../../commons/styles/authenticated/StyledAvatar';



  type Props = {
    jwt: JwtType;
  };
  
  export default function ProfileData({ jwt }: Props) {
    const { isLoading, error } = useGetProfileQuery(jwt);
    const profile = useSelector((state: RootState) => selectUser(state.auth));
    const dispatch = useDispatch<AppDispatch>();
    const handleLogOut = () => {
      dispatch(logOut());
    };
    if (isLoading)
      return (
        <StyledCenterContainer>
          <CircularProgress size={100} />
        </StyledCenterContainer>
      );
  
    if (error)
      return (
        <StyledCenterContainer>
          <SentimentVeryDissatisfiedOutlined
            color="error"
            sx={{ fontSize: 64, mb: 4 }}
          />
          <Typography variant="h6" color="error">
            {`Error: ${_.get(error, 'message', 'Failed to fetch your profile')}`}
          </Typography>
        </StyledCenterContainer>
      );
  
    return (
      <Container sx={{ my: 8, minHeight: '100vh' }}>
        <Title variant="h1" align="center">
          {profile?.name}`s Profile
        </Title>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <StyledProfileContainer>
              <Title variant="h6" sx={{ mb: 1 }}>
                Name
              </Title>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {profile?.name}
              </Typography>
              <Title variant="h6" sx={{ mb: 1 }}>
                Email
              </Title>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {profile?.email}
              </Typography>
              <Title variant="h6" sx={{ mb: 1 }}>
                Role
              </Title>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {profile?.role}
              </Typography>
              <Title variant="h6" sx={{ mb: 1 }}>
                ID
              </Title>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {profile?.id}
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                onClick={handleLogOut}
                endIcon={<LogoutOutlined />}
              >
                Log Out
              </Button>
            </StyledProfileContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center ',
              }}
            >
              <StyledAvatar src={profile?.avatar} alt={profile?.name} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
  