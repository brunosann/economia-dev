import React from "react";
import styles from "./Button.module.css";

const Button = ({ modal, children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
