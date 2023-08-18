import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser, updateUserProfile } from "../features/userSlice";
import customFetchBase from "./customFetchBase";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customFetchBase,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        console.log(token);
        return {
          url: "superadmin/user/superadmin-details",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    profileUpdate: builder.mutation({
      query: ({ id, userData }) => {
        const token = localStorage.getItem("token");
        const requestBody = { ...userData, id };
        return {
          url: `/superadmin/user/update`, // Replace this with the actual endpoint URL.
          method: "PUT", // Assuming you're using PUT for updates.
          body: requestBody, // This is the data you'd send for the profile update.
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateUserProfile(data));
        } catch (error) {}
      },

      // You can add additional methods like onQueryStarted, transformResponse, etc. if needed.
    }),
  }),
});

const { useProfileUpdateMutation } = userApi;

export { userApi, useProfileUpdateMutation };
