import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ type, enabled, text, onClick, color }) => {
  const buttonStyle = {
    primary: styles.primary,
    secondary: styles.secondary,
    white: styles.white,
    dark: styles.dark,
  };
  return (
    <button
      type={type}
      disabled={!enabled}
      onClick={onClick}
      className={buttonStyle[color]}
    >
      {text}
    </button>
  );
};

export default Button;
