import React from "react";
import styles from "./SmallCard.module.css";

const Card = ({ color, icon, text }) => {
  return (
    <div className={styles.card}>
      <div style={{ backgroundColor: color }} className={styles.boxIcon}>
        {icon}
      </div>
      <div className={styles.boxCardMoney}>
        <p>{text}</p>
        <p style={{ color: color, fontWeight: "bold" }}>R$ 541,00</p>
      </div>
    </div>
  );
};

export default Card;
