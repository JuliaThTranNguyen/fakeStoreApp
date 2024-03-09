import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, TextField } from '@mui/material';
import { CheckOutlined, ClearOutlined } from '@mui/icons-material';

import * as yup from 'yup';
import { Formik } from 'formik';
import _ from 'lodash';

import CategoryOptions from '../categories/CategoryOptions';
import StyledFilterContainer from '../../commons/styles/products/StyledFilterContainer';
import Title from '../../commons/styles/Title';
import { selectFilters, setFilters } from '../../redux/reducers/productsSlice';
import { ProductFiltersType } from '../../types/product';
import { RootState } from '../../redux/store';


const filtersInitialValues: Partial<ProductFiltersType> = {
  title: '',
  categoryId: '',
};

const validationSchema = yup.object({
  title: yup.string(),
  categoryId: yup.string().matches(/^\d*$/, 'Must be a number'),
  minPrice: yup.string().matches(/^\d*$/, 'Must be a number'),
  maxPrice: yup.string().matches(/^\d*$/, 'Must be a number'),
});

export default function ProductsFilter() {
  const dispatch = useDispatch();
  const handleSetFilters = (values: Partial<ProductFiltersType>) => {
    dispatch(setFilters(values));
  };
  const filters = useSelector((state: RootState) =>
    selectFilters(state.products)
  );
  const handleReset = () => {
    dispatch(setFilters(filtersInitialValues));
  };

  return (
    <StyledFilterContainer>
      <Title variant="h5" sx={{ mb: 2 }}>
        Filters
      </Title>
      <Formik
        initialValues={{ ...filtersInitialValues, ...filters }}
        validationSchema={validationSchema}
        onSubmit={handleSetFilters}
        onReset={handleReset}
      >
        {(formikProps) => (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <Box className="section" sx={{ marginY: 2 }}>
              <TextField
                label="Product title"
                variant="outlined"
                fullWidth
                value={formikProps.values.title}
                onChange={formikProps.handleChange('title')}
              />
              <CategoryOptions
                value={formikProps.values.categoryId || ''}
                setValue={(value) =>
                  formikProps.setFieldValue('categoryId', value)
                }
              />
            </Box>
            <Box className="section" sx={{ marginY: 2 }}>
              <TextField
                label="Min price"
                variant="outlined"
                value={formikProps.values.minPrice || ''}
                onChange={formikProps.handleChange('minPrice')}
                error={!!formikProps.errors.minPrice}
                fullWidth
              />
              <TextField
                label="Max price"
                variant="outlined"
                value={formikProps.values.maxPrice || ''}
                onChange={formikProps.handleChange('maxPrice')}
                error={!!formikProps.errors.maxPrice}
                fullWidth
              />
            </Box>
            <Box className="section" sx={{ marginY: 2 }}>
              <Button
                type="submit"
                disabled={!formikProps.isValid}
                fullWidth
                variant="contained"
                startIcon={<CheckOutlined />}
              >
                Apply
              </Button>
              <Button
                type="reset"
                fullWidth
                variant="outlined"
                onClick={() =>
                  formikProps.resetForm({ values: filtersInitialValues })
                }
                color="error"
                disabled={_.isEqual(formikProps.values, filtersInitialValues)}
                startIcon={<ClearOutlined />}
              >
                Reset
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </StyledFilterContainer>
  );
}
