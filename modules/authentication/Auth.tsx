import React from "react";
import classes from "./Auth.module.scss";
import NavBar from "../common/components/NavBar/NavBar";
import AuthForm from "./containers/AuthForm";

function Auth() {
  const navBarOptions = [
    {
      label: "About",
      route: "/",
    },
    {
      label: "Projects",
      route: "/",
    },
    {
      label: "Partners",
      route: "/",
    },
    {
      label: "Contact",
      route: "/",
    },
    {
      label: "Influencer Marketing Service",
      route: "/",
    },
  ];

  return (
    <div className={classes.container}>
      <NavBar options={navBarOptions} />
      <AuthForm />
    </div>
  );
}

export default Auth;
