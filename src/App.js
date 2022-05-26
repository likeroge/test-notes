import { useContext, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { NotesContext, Store } from "./store/Store";
import { GreetingView } from "./views/GreetingView/GreetingView";

const mockNotes = [
  {
    note_title: "Hello",
    note_number: 1,
  },
  {
    note_title: "World",
    note_number: 2,
  },
];

function App() {
  return (
    <Wrapper>
      <Header />
      <GreetingView />
      <Footer />
    </Wrapper>
  );
}

export default App;
