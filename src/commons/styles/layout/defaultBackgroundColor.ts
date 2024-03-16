import { Theme } from '@mui/material';

const defaultBackgroundColor = (theme: Theme, level: number = 0) => {
  const isDarkMode = theme.palette.mode === 'dark';

  // Example: Light mode
  if (!isDarkMode) {
    // Return light blue background color based on the level
    // You can adjust these values as needed
    switch (level) {
      case 0:
        return '#e3f2fd'; // Very light blue
      case 1:
        return '#e1fcfa'; // Slightly darker blue
      case 2:
        return '#1e3c4f'; // Even darker blue
      default:
        return '#90caf9';
    }
  }
  
  // Example: Dark mode
  // Implement similar logic for dark mode if needed
  // You can define colors based on the darkness level
  // You can adjust these values as needed
  switch (level) {
    case 0:
      return '#1e3c4f'; // Dark yellow
    case 1:
      return '#a106a1'; // Slightly lighter yellow
    case 2:
      return '#ede8e9'; // Even lighter yellow
    default:
      return '#1e3c4f';
  }
};

export default defaultBackgroundColor;
