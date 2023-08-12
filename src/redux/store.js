import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { authApi } from './api/authApi';
import { userApi } from './api/userApi';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
    ]),
});

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export {
  store,
  useAppDispatch,
  useAppSelector,
};

export default store;
