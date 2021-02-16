import React from "react";
import { GlobalContext } from "../../GlobalStorage";
import Input from "../helpers/Input";
import styles from "./Modal.module.css";

const Modal = ({ text, action }) => {
  const { modal, setModal, setAside } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const htmlHeight = document.querySelector("html").offsetHeight;
    const windowHeight = window.innerHeight;
    const screnHeight = htmlHeight > windowHeight ? htmlHeight : windowHeight;
    const shadow = document.querySelector(".shadow");
    shadow.classList.add("active");
    shadow.style.height = `${screnHeight}px`;
    setAside(false);
    return () => shadow.classList.remove("active");
  }, [setModal, setAside]);

  const actions = {
    submitRecipe: (e) => {
      e.preventDefault();
      console.log("receita");
    },

    submitExpense: (e) => {
      e.preventDefault();
      console.log("despesa");
    },
  };

  return (
    <div className={styles.modal}>
      <h1 className={styles.titleModal}>Adicione sua {modal.text}</h1>
      <form method="POST" className={styles.form}>
        <div
          className={styles.formGroup}
          style={{ gridColumn: modal.text === "Despesa" ? "" : "1/3" }}
        >
          <Input type="text" label="Valor R$:" placeholder="R$ 59,35" />
        </div>
        {modal.text === "Despesa" && (
          <div className={styles.selectGroup}>
            <label htmlFor="category">Categoria:</label>
            <select name="" id="category" className={styles.select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        )}
        <div className={`${styles.formGroup} ${styles.description}`}>
          <Input
            type="text"
            label="Descrição Opcional:"
            placeholder="churrasco final de semana..."
          />
        </div>
        <button onClick={() => setModal(false)} className={styles.btn}>
          Cancelar
        </button>
        <button onClick={actions[modal.action]} className={styles.btn}>
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default Modal;
