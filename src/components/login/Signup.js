import React from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import Input from "../helpers/Input";

const Signup = () => {
  return (
    <article className={styles.login}>
      <h2>Criar Conta</h2>
      <form className={styles.form} method="post">
        <div className={styles.formGroup}>
          <Input label="Email:" id="name" type="email" />
        </div>
        <div className={styles.formGroup}>
          <Input label="Senha:" id="password" type="password" />
        </div>
        <div className={styles.formGroup}>
          <Input label="Confirmar Senha:" id="co_password" type="password" />
        </div>
        <button className={styles.button}>Cadastrar</button>
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

export default Signup;
