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
import Modal from "../modal/Modal";
import { GlobalContext } from "../../GlobalStorage";

const Dashboard = () => {
  const { modal } = React.useContext(GlobalContext);

  return (
    <main className={styles.main}>
      {modal && <Modal text="Despesa" action="submitExpense" />}
      <section>
        <Button text="Receita" action="submitRecipe">
          Nova Receita
        </Button>
        <Button text="Despesa" action="submitExpense">
          Nova Despesa
        </Button>
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
