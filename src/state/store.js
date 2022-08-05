import { configureStore } from '@reduxjs/toolkit';
import mainSliceReducer from './main/mainSlice';

export const store = configureStore({
  reducer: {
    main: mainSliceReducer,
  },
});
