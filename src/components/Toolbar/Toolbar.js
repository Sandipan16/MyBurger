import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Navitems from "../NavigationBar/Navitems/Navitems";

export default props => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <Navitems />
      </nav>
    </header>
  );
};
