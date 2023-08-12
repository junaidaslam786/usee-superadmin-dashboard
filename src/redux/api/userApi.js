import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser, logout } from '../features/userSlice';
import customFetchBase from './customFetchBase';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase(logout),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: 'user/profile',
          credentials: 'include',
        };
      },
      transformResponse: (result) => result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export { userApi };
