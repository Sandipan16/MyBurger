import React from "react";
import classes from "./Navitem.module.css";

export default props => {
  return (
    <li className={classes.Navitem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};
