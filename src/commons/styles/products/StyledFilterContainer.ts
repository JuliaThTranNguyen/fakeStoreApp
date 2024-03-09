import { styled, Box } from '@mui/material';
import defaultBackgroundColor from '../defaultBackgroundColor';

const StyledFilterContainer = styled(Box)`
  background: ${({ theme }) => defaultBackgroundColor(theme)};
  border-radius: 8px;
  display: flex;
  padding: 1em;
  flex-direction: column;
  margin: 0;

  form {
    display: flex;
    flex-direction: column;
  }

  .section {
    display: flex;
    gap: 1em;
  }
`;

export default StyledFilterContainer;
