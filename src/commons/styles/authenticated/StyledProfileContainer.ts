import { Box, styled } from '@mui/material';
import defaultBackgroundColor from '../layout/defaultBackgroundColor';

const StyledProfileContainer = styled(Box)`
  margin-top: 4em;
  background-color: ${({ theme }) => defaultBackgroundColor(theme)};
  border-radius: 1em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default StyledProfileContainer;
