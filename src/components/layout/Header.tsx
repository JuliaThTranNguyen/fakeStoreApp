import { Box, Container, useTheme } from '@mui/material';

import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import StoreIcon from '@mui/icons-material/Store';

import ThemeSwitch from './ThemeSwitch';
import CartIcon from '../cart/CartIcon';
import CartOverlay from '../cart/CartOverlay';

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
          <StoreIcon />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ThemeSwitch />
            <CartIcon />
            <SettingsAccessibilityIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
