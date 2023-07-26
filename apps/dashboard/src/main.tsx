import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { featureRoutes } from 'homepage-feature';
import { store } from './store';

console.log('store', store, store.getState());

const router = createBrowserRouter(featureRoutes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
