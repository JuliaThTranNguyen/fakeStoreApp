import { ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  clearCart,
  selectTotalPrice,
  selectTotalQuantity,
} from '../../redux/reducers/cartSlice';
import StyledCartSummary from '../../commons/styles/cart/StyledCartSummary';

export default function CartSummary() {
  const dispatch = useDispatch();

  const totalItems = useSelector((state: RootState) =>
    selectTotalQuantity(state.cart)
  );

  const totalPrice = useSelector((state: RootState) =>
    selectTotalPrice(state.cart)
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <StyledCartSummary>
      <Typography
        variant="h5"
        sx={{ fontWeight: 500 }}
        className="quantity-price"
      >
        Total items: {totalItems}
      </Typography>
      <Box>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ShoppingCartCheckoutOutlined />}
        >
          Proceed to checkout (${totalPrice})
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{ ml: 4 }}
          onClick={handleClearCart}
        >
          Clear Cart
        </Button>
      </Box>
    </StyledCartSummary>
  );
}
