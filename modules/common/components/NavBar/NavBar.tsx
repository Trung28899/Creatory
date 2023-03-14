import React, { ReactNode } from "react";
import Image from "next/image";
import classes from "./NavBar.module.scss";
import Logo from "@/public/creatory.png";
import { useRouter } from "next/router";

type NavOption = {
  label: string;
  route: string;
  active?: boolean;
  onClick?: () => void;
};

interface NavBarOptionProps {
  variant: "default" | "black";
  option: NavOption;
}

interface NavBarProps {
  options: NavOption[];
  variant?: "default" | "black";
}

function NavBarOption({ variant, option }: NavBarOptionProps) {
  const { label, route, active, onClick } = option;
  const router = useRouter();
  const navOptionClasses = [
    classes.navBarOption,
    classes[variant],
    active && classes.active,
  ].join(" ");

  const onClickHandler = () => {
    onClick?.();
    return router.push(route || "/");
  };

  return (
    <p className={navOptionClasses} onClick={onClickHandler}>
      {label}
    </p>
  );
}

function NavBar({ options, variant }: NavBarProps) {
  return (
    <div className={classes.container}>
      <Image src={Logo} alt="" className={classes.logo} />
      <div className={classes.optionContainer}>
        {options.map((option, index) => (
          <NavBarOption
            variant={variant || "default"}
            key={index + 1}
            option={option}
          />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
