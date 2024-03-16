import { CloseOutlined } from '@mui/icons-material';
import { Box, Container, IconButton, Slide } from '@mui/material';
import useCartOverlay from '../../hooks/useCartOverlay';
import StyledCartOverlayContainer from '../../commons/styles/cart/StyledCartOverlayContainer';
import Title from '../../commons/styles/layout/Title';
import CartItemsList from './CartItemsList';

export default function CartOverlay() {
  const { isShown, hideCartOverlay } = useCartOverlay();
  return (
    <Slide in={isShown}>
      <StyledCartOverlayContainer>
        <Container>
          <Box sx={{ display: 'flex', py: 2, justifyContent: 'flex-end' }}>
            <IconButton onClick={hideCartOverlay}>
              <CloseOutlined className="close-icon" />
            </IconButton>
          </Box>
          <Title variant="h2">Cart</Title>
          <CartItemsList handleCloseCart={hideCartOverlay} />
        </Container>
      </StyledCartOverlayContainer>
    </Slide>
  );
}
