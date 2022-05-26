import React, { useContext, useState } from "react";
import { NotesContext } from "../../store/Store";
import { FlexCol } from "../FlexCol/FlexCol";
import styles from "./NoteForm.module.css";

export const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const { addNote, notes } = useContext(NotesContext);

  const addNoteToList = () => {
    addNote({ title, number });
    notes.push({ number, title });
    setNumber("");
    setTitle("");
    if (localStorage.getItem("notes")?.length) {
      localStorage.removeItem("notes");
      console.log("removed");
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  };

  return (
    <div className={styles.greeting_form}>
      <FlexCol>
        <label htmlFor="note-number">Номер записи</label>
        <input
          type="number"
          id="note-number"
          placeholder="Введите номер записи"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
      </FlexCol>

      <FlexCol>
        <label htmlFor="note-title">Название записи</label>
        <input
          type="text"
          id="note-title"
          placeholder="Введите название записи"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FlexCol>

      <button onClick={addNoteToList}>Добавить в список</button>
    </div>
  );
};
