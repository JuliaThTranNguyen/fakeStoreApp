import { Container, Grid } from '@mui/material';

import Title from '../../commons/styles/layout/Title';
import ProductList from './ProductList';
import ProductsFilter from './ProductsFilter';
import ProductsSortingOptions from './ProductsSortingOptions';
import ProductsPagination from './ProductsPagination';

export default function Products() {
  return (
    <Container>
      <Title variant="h3" sx={{ mb: 4 }}>
        Product catalog
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductsFilter />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductsSortingOptions />
        </Grid>
        <Grid item xs={12}>
          <ProductList />
        </Grid>
        <Grid item xs={12}>
          <ProductsPagination />
        </Grid>
      </Grid>
    </Container>
  );
}
