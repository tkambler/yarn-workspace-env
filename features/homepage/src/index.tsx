import { HomepageFeature } from './Homepage';
export { default as reducer } from './slice';

export const featureRoutes = [
  {
    path: '/',
    Component: HomepageFeature,
  },
];
