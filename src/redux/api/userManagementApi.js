
import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

const userManagementApi = createApi({
  reducerPath: "userManagementApi",
  baseQuery: customFetchBase,
  tagTypes: ["UserManagement"],
  endpoints: (builder) => ({
    getAllUsersExceptSuperAdmin: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "superadmin/user/all-users",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

const { useGetAllUsersExceptSuperAdminQuery } = userManagementApi;

export { userManagementApi, useGetAllUsersExceptSuperAdminQuery };
