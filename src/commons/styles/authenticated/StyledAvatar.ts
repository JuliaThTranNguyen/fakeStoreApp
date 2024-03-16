import { styled } from '@mui/material';
import defaultBackgroundColor from '../layout/defaultBackgroundColor';

const StyledAvatar = styled('img')`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${({ theme }) => defaultBackgroundColor(theme)};
`;

export default StyledAvatar;
