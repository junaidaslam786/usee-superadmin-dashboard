import React from "react";
import CustomTable from "../../custom-table/CustomTable";
import { useGetAllUsersExceptSuperAdminQuery } from "../../../redux/api/userManagementApi";

const AllUserDataTable = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useGetAllUsersExceptSuperAdminQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error Loading Users</div>;

  return (
    <div>
      <CustomTable data={users} />
    </div>
  );
};

export default AllUserDataTable;
