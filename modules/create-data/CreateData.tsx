import React from "react";
import classes from "./CreateData.module.scss";
import NavBar from "@/modules/common/components/NavBar/NavBar";
import { logout } from "@/store/reducers/authReducer";
import { useDispatch } from "react-redux";
import CreateForm from "./containers/CreateForm";

function CreateData() {
  const dispatch = useDispatch();

  const navBarOptions = [
    {
      label: "Data View",
      route: "/view-data",
    },
    {
      label: "Create Data",
      route: "/create-data",
      active: true,
    },
    {
      label: "Log Out",
      route: "/",
      onClick: () => dispatch(logout()),
    },
  ];

  return (
    <div className={classes.container}>
      <NavBar options={navBarOptions} variant="black" />
      <CreateForm />
    </div>
  );
}

export default CreateData;
