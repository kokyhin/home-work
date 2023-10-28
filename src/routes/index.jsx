import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';

import NotFoundPage from 'src/pages/NotFoundPage';
import MainLayout from 'src/layout/MainLayout';
import ProductPage from 'src/pages/productPage';
import ProductListPage from 'src/pages/productListPage';

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <ProductListPage />,
      },
      {
        path: '/product/:productId',
        element: <ProductPage />,
      },
    ],
  },
]);
