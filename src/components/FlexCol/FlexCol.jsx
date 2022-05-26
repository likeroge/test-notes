import React from "react";
import styles from "./FlexCol.module.css";

export const FlexCol = ({ children }) => {
  return <div className={styles.flex_col}>{children}</div>;
};
