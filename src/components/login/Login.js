import React from "react";
import styles from "./Login.module.css";
import { ReactComponent as Logo } from "../../assets/logooo.svg";
import { Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";

const Login = () => {
  return (
    <main className={styles.main}>
      <article className={styles.logo}>
        <Logo />
        <p>Tome o controle de seus gastos</p>
      </article>
      <Routes>
        <Route path="" element={<Signin />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/redefinir" element={<ResetPassword />} />
      </Routes>
    </main>
  );
};

export default Login;
