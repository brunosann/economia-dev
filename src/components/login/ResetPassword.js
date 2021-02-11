import React from "react";
import styles from "./ResetPassword.module.css";
import { Link } from "react-router-dom";
import Input from "../helpers/Input";

const ResetPassword = () => {
  return (
    <article className={styles.login}>
      <h2>Redefinir Senha</h2>
      <form className={styles.form} method="post">
        <div className={styles.formGroup}>
          <Input label="Email:" id="name" type="email" />
        </div>

        <button className={styles.button}>Redefinir</button>
        <div className={styles.boxSignup}>
          Ja tem uma conta ?{" "}
          <Link to="/login" className={styles.signup}>
            Entre !
          </Link>
        </div>
      </form>
    </article>
  );
};

export default ResetPassword;
