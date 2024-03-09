import { createTheme } from '@mui/material';
import { ColorTheme } from '../../hooks/useColorTheme';

const createThemeMode = (mode: ColorTheme) =>
  createTheme({
    palette: {
      mode,
    },
  });

export default createThemeMode;
