import React from "react";
import { GlobalContext } from "../../GlobalStorage";
import styles from "./Button.module.css";

const Button = ({ text, action, children }) => {
  const { setModal } = React.useContext(GlobalContext);

  return (
    <button
      onClick={() => setModal({ text, action })}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
