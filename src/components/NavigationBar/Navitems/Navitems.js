import React from "react";
import Navitem from "./Navitem/Navitem";
import styles from "./Navitems.module.css";

export default props => {
  return (
    <ul className={styles.Navitems}>
      <Navitem link={"/"} active>
        Burger Builder
      </Navitem>
      <Navitem link={"/"}>Checkout</Navitem>
    </ul>
  );
};
