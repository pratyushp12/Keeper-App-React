import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function createNote(notes) {
    return <Note 
    title={notes.title}
    details={notes.content}
    />;
  }


  function App() {
    return (
      <div>
        <Header />
        {Notes.map(createNote)}
        <Footer />
      </div>
    );
  }
  
  export default App;
  