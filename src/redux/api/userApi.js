import { createApi } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/userSlice';
import customFetchBase from './customFetchBase';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetchBase,
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => {
        const token = localStorage.getItem('token');
        console.log(token)
        return {
          url: 'superadmin/user/superadmin-details',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
      },
      transformResponse: (result) => result[0],
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
