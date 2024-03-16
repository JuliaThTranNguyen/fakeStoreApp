import { Box, styled } from '@mui/material';
import defaultBackgroundColor from '../layout/defaultBackgroundColor';

const StyledCartSummary = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  border-radius: 1em;
  margin-bottom: 2em;
  background-color: ${({ theme }) => defaultBackgroundColor(theme)};
`;

export default StyledCartSummary;
