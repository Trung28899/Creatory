import React, { useEffect } from "react";
import { UserResponse } from "@/pages/api/view";
import Table from "../common/components/Table/Table";
import classes from "./View.module.scss";
import NavBar from "@/modules/common/components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { logout } from "@/store/reducers/authReducer";

function View({ data: viewData }: { data: UserResponse }) {
  const { authenticated } = useSelector((state: RootState) => state.authObject);
  const router = useRouter();
  const dispatch = useDispatch();

  const columns = [
    { label: "Record No", key: "recordNo" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
  ];

  const navBarOptions = [
    {
      label: "Data View",
      route: "/view-data",
      active: true,
    },
    {
      label: "Create Data",
      route: "/create-data",
    },
    {
      label: "Log Out",
      route: "/",
      onClick: () => dispatch(logout()),
    },
  ];

  const numberedData = viewData.data.map((details, index) => {
    return { ...details, recordNo: index + 1 };
  });

  useEffect(() => {
    if (!authenticated) router.push("/");
  }, [authenticated, router]);

  return (
    <div className={classes.container}>
      <NavBar options={navBarOptions} variant="black" />
      <div className={classes.tableContainer}>
        <Table
          itemsPerPagePagination={10}
          data={numberedData}
          columnFields={columns}
        />
      </div>
    </div>
  );
}

export default View;
