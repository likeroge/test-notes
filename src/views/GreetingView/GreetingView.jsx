import React from "react";
import { FlexCol } from "../../components/FlexCol/FlexCol";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { GreetingNoteList } from "./components/GreetingNoteList/GreetingNoteList";
import styles from "./GreetingView.module.css";

export const GreetingView = () => {
  return (
    <div className={styles.greeting_wrapper}>
      <h1 className={styles.greeting_title}>Приветствую!</h1>
      <div className={styles.greeting_main}>
        <div className={styles.greeting_content}>
          <p className={styles.greeting_mainText}>
            Давай обновим список и начем обучение
          </p>
          <GreetingNoteList />
        </div>
        <NoteForm />
      </div>
    </div>
  );
};
