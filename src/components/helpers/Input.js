import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, id, type }) => {
  return (
    <React.Fragment>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} name={id} id={id} />
    </React.Fragment>
  );
};

export default Input;
