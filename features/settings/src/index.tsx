import { SettingsFeature } from './Settings';
export { default as reducer } from './slice';

export const featureRoutes = [
  {
    path: '/settings',
    Component: SettingsFeature,
  },
];
