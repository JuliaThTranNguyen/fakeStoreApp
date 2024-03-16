import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { selectJwt } from '../redux/reducers/authSlice';
import CheckAuth from '../components/authentication/CheckAuth';
import ProfileData from '../components/authenticated/ProfileData';

export default function Profile() {
  const jwt = useSelector((state: RootState) => selectJwt(state.auth));

  return (
    <Box>
      {!jwt && <CheckAuth />}
      {jwt && <ProfileData jwt={jwt} />}
    </Box>
  );
}
