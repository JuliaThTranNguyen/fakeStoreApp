import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton, useTheme } from '@mui/material';

import useCartOverlay from '../../hooks/useCartOverlay';
import { RootState } from '../../redux/store';
import { selectTotalQuantity } from '../../redux/reducers/cartSlice';

export default function CartIcon() {
  const itemsInCart = useSelector((state: RootState) =>
    selectTotalQuantity(state.cart)
  );
  const { showCartOverlay } = useCartOverlay();
  const theme = useTheme();
  const badgeColor = useMemo(
    () => (itemsInCart > 0 ? 'primary' : 'default'),
    [itemsInCart]
  );
  return (
    <IconButton onClick={showCartOverlay}>
      <Badge badgeContent={itemsInCart} showZero color={badgeColor}>
        <ShoppingCartIcon sx={{ color: theme.palette.primary.main }} />
      </Badge>
    </IconButton>
  );
}
