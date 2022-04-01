import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({
  text,
  onClick,
  color = "primary",
  enabled = true,
  type = "button",
  size = "normal",
}) => {
  const buttonStyle = {
    primary: styles.primary,
    secondary: styles.secondary,
    white: styles.white,
    dark: styles.dark,
  };

  const buttonSize = {
    xs: styles.xs,
    small: styles.small,
    normal: "",
    large: styles.large,
    xl: styles.xl,
  };

  return (
    <button
      type={type}
      disabled={!enabled}
      onClick={onClick}
      className={[buttonStyle[color], buttonSize[size], styles.btn].join(" ")}
    >
      {text}
    </button>
  );
};

export default Button;
