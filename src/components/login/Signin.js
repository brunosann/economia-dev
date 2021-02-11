import React from "react";
import styles from "./Signin.module.css";
import Input from "../helpers/Input";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <article className={styles.login}>
      <h2>Entrar</h2>
      <form className={styles.form} method="post">
        <div className={styles.formGroup}>
          <Input label="Email:" id="name" type="email" />
        </div>
        <div className={styles.formGroup}>
          <Input label="Senha:" id="password" type="password" />
        </div>
        <button className={styles.button}>Entrar</button>

        <div className={styles.boxSignup}>
          Não tem conta ?{" "}
          <Link to="cadastro" className={styles.signup}>
            Cadastre-se !
          </Link>
        </div>

        <div className={styles.boxSignup}>
          Esqueceu a senha ?{" "}
          <Link to="redefinir" className={styles.signup}>
            Recuperar !
          </Link>
        </div>
      </form>
    </article>
  );
};

export default Signin;
