import { configureStore } from '@reduxjs/toolkit';
import { reducer as homepageReducer } from 'homepage-feature';

console.log('hp', homepageReducer);

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
