import React, { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "yellow" | "pink";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant, className, size, ...otherProps } = props;

  const buttonClasses = [
    classes.button,
    classes[variant || "primary"],
    classes[size || "small"],
    className,
  ].join(" ");

  return <button className={buttonClasses} {...otherProps} />;
};

export default Button;
