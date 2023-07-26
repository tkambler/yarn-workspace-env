import { configureStore } from '@reduxjs/toolkit';
import { reducer as homepageReducer } from 'homepage-feature';
import { reducer as settingsReducer } from 'settings-feature';

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
