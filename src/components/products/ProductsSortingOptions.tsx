import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { ProductsSortingOption } from '../../types/product';
import { RootState } from '../../redux/store';
import Title from '../../commons/styles/Title';
import StyledFilterContainer from '../../commons/styles/products/StyledFilterContainer';
import { selectSort, setSort } from '../../redux/reducers/productsSlice';

export default function ProductsSortingOptions() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => selectSort(state.products));

  const handleSetSort = (value: ProductsSortingOption) => {
    dispatch(setSort(value));
  };

  return (
    <StyledFilterContainer>
      <Title variant="h5" sx={{ mb: 2 }}>
        Sorting
      </Title>
      <ToggleButtonGroup
        value={sort}
        exclusive
        color="primary"
        onChange={(_e, value) => handleSetSort(value)}
      >
        <ToggleButton value="none" disabled={sort === 'none'}>
          None
        </ToggleButton>
        <ToggleButton value="priceAscending" disabled={sort === 'priceAscending'}>
          Price Asc
        </ToggleButton>
        <ToggleButton value="priceDescending" disabled={sort === 'priceDescending'}>
          Price Desc
        </ToggleButton>
      </ToggleButtonGroup>
    </StyledFilterContainer>
  );
}
