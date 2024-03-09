import { Box } from '@mui/system';

import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';

const Catalog = () => {
  return (
    <Box>
      <Categories />
      <Products />
    </Box>
  );
};

export default Catalog;
