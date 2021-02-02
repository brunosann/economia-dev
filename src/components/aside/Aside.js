import React from "react";
import { GlobalContext } from "../../GlobalStorage";
import styles from "./Aside.module.css";

const Aside = () => {
  const { modal } = React.useContext(GlobalContext);

  if (!modal) return null;

  return (
    <aside className={styles.aside}>
      <div className={styles.boxImg}>
        <img className={styles.img} src="" alt="" />
        <span>Olá, NOME</span>
      </div>
      <nav>
        <ul>
          <li className={styles.li}>Dashboard</li>
          <li className={styles.li}>Histórico</li>
          <li className={styles.li}>Receitas</li>
          <li className={styles.li}>Poupador</li>
          <li className={styles.li}>Despesa Fixa</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
