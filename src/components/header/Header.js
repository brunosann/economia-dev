import React from "react";
import styles from "./Header.module.css";
import { GoThreeBars } from "react-icons/go";
import { ReactComponent as Logo } from "../../assets/logooo.svg";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../GlobalStorage";

const Header = () => {
  const { setModal, modal } = React.useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <div className={styles.boxImg}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.menu}>
          <GoThreeBars
            className={styles.icon}
            onClick={() => setModal(!modal)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
