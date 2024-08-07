import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login';

const store = configureStore({
  reducer: {
    loginuser:loginSlice
  },
});

export default store;
