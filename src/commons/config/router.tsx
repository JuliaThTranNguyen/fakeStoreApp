import { createBrowserRouter } from 'react-router-dom';

import EditSwitchingProducts from '../../components/products/EditSwitchingProducts';
import Layout from '../../components/layout/Layout';
import Catalog from '../../pages/Catalog';
import ErrorPage from '../../pages/ErrorPage';
import AllProducts from '../../pages/AllProducts';
import Profile from '../../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Catalog />,
      },
      {
        path: '/product/:id',
        element: <AllProducts />,
      },
      {
        path: '/edit/:id',
        element: <EditSwitchingProducts />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
