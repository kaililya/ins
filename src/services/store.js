import { configureStore,combineReducers } from '@reduxjs/toolkit';
import swaggerDataReducer from '../services/slices/initialSlice'

const rootReducer = combineReducers({
  swaggerDataReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
};