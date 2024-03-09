import { ArrowLeftOutlined } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateProductType } from '../../types/product';
import handeUpdateProductValues from '../../commons/utils/product/handeUpdateProductValues';
import ProductForm from './ProductForm';
import { useGetProductByIdQuery, useUpdateProductMutation } from '../../commons/config/fakeStoreApi';

type Props = {
  id: number;
};

export default function EditSingleProduct({ id }: Props) {
  const { data: product } = useGetProductByIdQuery(id);
  const [editProduct] = useUpdateProductMutation();
  const navigate = useNavigate();
  const handleFormSubmit = async (values: Partial<CreateProductType>) => {
    await editProduct({ id, ...values });
  };
  const goToProductPage = useCallback(() => {
    navigate(`/product/${id}`);
  }, [navigate, id]);
  return (
    <Container
      sx={{
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {product && (
            <>
              <Button
                variant="text"
                onClick={goToProductPage}
                startIcon={<ArrowLeftOutlined />}
              >
                To product page
              </Button>
              <ProductForm
                submitFn={handleFormSubmit}
                successMessage="🚀 Product updated!"
                fallbackErrorMessage="Failed to update the product."
                providedValues={handeUpdateProductValues(product)}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
