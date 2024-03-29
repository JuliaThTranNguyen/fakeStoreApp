import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';

import { RootState } from '../../redux/store';
import { selectPaginationParams, setPage } from '../../redux/reducers/productsSlice';

export default function ProductsPagination() {
  const { page, totalPages } = useSelector((state: RootState) =>
    selectPaginationParams(state.products)
  );
  const dispatch = useDispatch();

  return (
    <Pagination
      count={totalPages}
      shape="rounded"
      sx={{ mt: 4 }}
      size="large"
      page={page}
      onChange={(_e, page) => dispatch(setPage(page))}
    />
  );
}
