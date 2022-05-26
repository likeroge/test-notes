import React from "react";
import { Logo } from "../../assets/icons/Logo/Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <Logo />
    </div>
  );
};
