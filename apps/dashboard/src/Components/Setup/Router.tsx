import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { featureRoutes as homepageRoutes } from 'homepage-feature';
import { featureRoutes as settingsRoutes } from 'settings-feature';

const router = createBrowserRouter([...homepageRoutes, ...settingsRoutes]);

export const withRouter = (Component) => (props) =>
  (
    <>
      <RouterProvider router={router} />
      <Component {...props} />
    </>
  );
