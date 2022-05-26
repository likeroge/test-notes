import React from "react";
import { Logo } from "../../assets/icons/Logo/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <Logo />
    </div>
  );
};
