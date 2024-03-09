import { Box, styled } from '@mui/material';
import defaultBackgroundColor from '../defaultBackgroundColor';

const StyledInfoContainer = styled(Box)`
  background-color: ${({ theme }) => defaultBackgroundColor(theme)};
  display: flex;
  padding: 2em;
  border-radius: 1em;
  flex-direction: column;
  align-items: flex-start;
`;

export default StyledInfoContainer;
