import { Box, Container, useTheme } from '@mui/material';

import CartIcon from '../cart/CartIcon';
import CartOverlay from '../cart/CartOverlay';
import UserIcon from '../authentication/UserIcon';
import AppLogo from './AppLogo';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const theme = useTheme();
  return (
    <Box component="header">
       <CartOverlay />
      <Container>
        <Box
          sx={{
            display: 'flex',
            paddingY: 2,
            bgcolor: theme.palette.background.default,
            justifyContent: 'space-between',
          }}
        >
          <AppLogo />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ThemeSwitcher />
            <CartIcon />
            <UserIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
