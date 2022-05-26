import React, { useState } from "react";
import { mockNotes } from "../mockData";

export const NotesContext = React.createContext();

export const Store = ({ children }) => {
  let notesFromLocalStorage = JSON.parse(localStorage.getItem("notes"));
  if (!notesFromLocalStorage) {
    notesFromLocalStorage = [];
  }
  //    For mock data
  //   const [notes, setNotes] = useState(mockNotes);
  const [notes, setNotes] = useState(notesFromLocalStorage);
  const addNote = ({ title, number }) => {
    const newNote = {
      title,
      number,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes: notes, addNote: addNote }}>
      {children}
    </NotesContext.Provider>
  );
};
