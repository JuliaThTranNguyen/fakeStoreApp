import { SentimentVeryDissatisfiedOutlined } from '@mui/icons-material';
import { Box, CircularProgress, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';
import _ from 'lodash';

import { useGetProductByIdQuery } from '../commons/config/fakeStoreApi';
import SingleProduct from '../components/products/SingleProduct';
import StyledCenterContainer from '../commons/styles/products/StyledCenterContainer';

const AllProducts = () => {
  const { id: productId } = useParams<{ id: string }>();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(Number(productId));

  if (isLoading) {
    return (
      <StyledCenterContainer sx={{ minHeight: '85vh' }}>
        <CircularProgress size={100} />
      </StyledCenterContainer>
    );
  }

  if (error || !product) {
    return (
      <StyledCenterContainer sx={{ minHeight: '85vh' }}>
        <SentimentVeryDissatisfiedOutlined
          color="error"
          sx={{ fontSize: 64, mb: 2 }}
        />
        <Typography variant="h4" color="error.main">
          Error: {_.get(error, 'message', 'Failed to fetch product info.')}
        </Typography>
      </StyledCenterContainer>
    );
  }

  return (
    <Box>
      <SingleProduct product={product} />
    </Box>
  );
};

export default AllProducts;
