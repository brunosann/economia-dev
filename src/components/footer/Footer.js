import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> &copy; Todos os direitos reservados</p>
      <p>
        Desenvolvido por{" "}
        <a target="_blank" rel="noreferrer" href="https://devteixeira.com/">
          DevTeixeira
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
