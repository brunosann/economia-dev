import React from "react";
import styles from "./ExpenseCard.module.css";

const ExpenseCard = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <article className={styles.article}>
      <p className={styles.title}>Despesas do Mês</p>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item} className={styles.listItem}>
            <div className={styles.info}>
              <span>Categogia</span>
              <span>info extra que pode ser adicionada</span>
            </div>
            <div className={styles.money}>
              <span>R$ 16,95</span>
              <span>04 / 02</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExpenseCard;
