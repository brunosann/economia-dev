import React from "react";
import styles from "./Dashboard.module.css";
import Button from "../helpers/Button";
import Card from "../cards/SmallCard";
import {
  FaCommentDollar,
  FaCommentsDollar,
  FaFunnelDollar,
} from "react-icons/fa";
import ExpenseCard from "../cards/ExpenseCard";
import ChartCard from "../cards/ChartCard";

const Dashboard = () => {
  return (
    <main className={styles.main}>
      <section>
        <Button modal="receita">Nova Receita</Button>
        <Button modal="receita">Nova Despesa</Button>
      </section>
      <section className={styles.cards}>
        <Card color="#3C73B9" text="Saldo Atual" icon={<FaCommentDollar />} />
        <Card color="#2F9F3A" text="Receitas" icon={<FaCommentsDollar />} />
        <Card color="#9D2E2E" text="Despesas" icon={<FaFunnelDollar />} />
      </section>
      <section className={styles.expenseCards}>
        <ExpenseCard />
        <ChartCard />
      </section>
    </main>
  );
};

export default Dashboard;
