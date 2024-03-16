import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';
import StyledAppLogo from '../../commons/styles/layout/StyledAppLogo';



export default function AppLogo() {
  const navigate = useNavigate();
  return (
    <StyledAppLogo onClick={() => navigate('/')} component="button">
      <Typography
        variant="body1"
        className="text"
        sx={{
          padding: 0,
          fontWeight: '600',
        }}
      >
        <StoreIcon />
      </Typography>
    </StyledAppLogo>
  );
}
