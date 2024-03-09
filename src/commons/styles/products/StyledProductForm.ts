import { Box, styled } from '@mui/material';
import defaultBackgroundColor from '../defaultBackgroundColor';

const StyledProductForm = styled(Box)`
  background-color: ${({ theme }) => defaultBackgroundColor(theme)};
  border-radius: 1em;

  form {
    padding: 2em;
  }

  .section {
    display: flex;
    flex-direction: column;
  }

  .image-preview {
    background: ${({ theme }) => defaultBackgroundColor(theme, 2)};
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 1em;
    margin-bottom: 1em;
  }
`;

export default StyledProductForm;
