import React, { useContext } from "react";
import { NotesContext } from "../../../../store/Store";
import { notesSortByNumber } from "../../../../utils/sortFunctions";
import styles from "./GreetingNoteList.module.css";

export const GreetingNoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className={styles.list_wrapper}>
      {notes.length === 0 ? (
        <p className={styles.list_title}>Список пуст</p>
      ) : (
        <p className={styles.list_title}>Список:</p>
      )}

      <ul>
        {notes.sort(notesSortByNumber).map((note, idx) => (
          <li key={idx}>
            {note.number}) {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
