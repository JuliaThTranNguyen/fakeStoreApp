import { Box, styled } from '@mui/material';
import defaultBackgroundColor from '../layout/defaultBackgroundColor';

const StyledSelectedProductContainer = styled(Box)`
  padding: 2em;
  min-height: 4em;
  border-radius: 1em;
  background: ${({ theme }) => defaultBackgroundColor(theme)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;

  .product-title {
    font-weight: 500;
    transition: 0.2s;
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      color: ${({ theme }) => theme.palette.primary.dark};
    }
  }

  .primary-info {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    align-items: flex-start;
  }

  .price-calc {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    align-items: center;
  }
`;

export default StyledSelectedProductContainer;
