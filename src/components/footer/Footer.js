import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> &copy; Todos os direitos reservados</p>
      <p>
        Desenvolvido por <a href="https://devteixeira.com/">DevTeixeira</a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
