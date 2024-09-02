
import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/loging/Login';
import Header from './components/header/Header';
import MainBody from './components/main/MainBody';
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [selected, setSelected] = useState()
  const [activeNote, setActiveNote] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    getNotes();
  }, [])

  // get notes
  const getNotes = () => {
    fetch("/api/notes")
      .then((res) => {
        return (
          res.json()
        );
      })
      .then((data) => setNotes(data.notes))
      .catch((err) => console.log(err))
  }

  // get note
  const getNote = (id) => {
    fetch(`/api/notes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data.notes);
      })
      .catch((error) => console.log('Note not found', error));
  };

  // delete note
  const deleteNote = (id) => {
    fetch(`/api/notes/${id}`, { method: "delete" })
      .then((res) => {
        getNotes();
      })
      .catch(err => console.log("note not found", err))
  }

  const getNewData = (type, sketchItem) => {
    if (type == "text") {
      return {
        id: uuid(),
        title: "title",
        body: "body",
        type: "text",
        date: Date.now()
      }
    }
    else {
      return {
        id: uuid(),
        title: "drawing",
        body: sketchItem,
        type: "sketch",
        date: Date.now()
      }
    }
  }

  // add new note
  const handleAdd = (type) => {
    const getNew = getNewData("text");
    fetch(`/api/notes/`, {
      method: "post",
      body: JSON.stringify(getNew)
    })
      .then((res) => {
        setNotes([getNew, ...notes])
        setSelected(getNew)
        // getNotes();
      })
  }

  const handleSketch = () => {
    const getNew = getNewData("sketch");
    fetch(`/api/notes/`, {
      method: "post",
      body: JSON.stringify(getNew)
    })
      .then((res) => {
        setNotes([getNew, ...notes])
        setSelected(getNew)
        // getNotes();
      })
  }
  // update
  const updateNote = (id) => {
    fetch(`/api/notes/${id}`, { method: 'PATCH' })
      .then((res) => {
        getNotes();
      })
      .catch((error) => { console.log('Note not found', error) });
  };

  return (
    <>
      <div className="app">
        <div className='wrapper'>
          <Header handleAdd={handleAdd} handleSketch={handleSketch} />
          <MainBody updateNote={updateNote} notes={notes} deleteNote={deleteNote} getNote={getNote} selected={selected} setNotes={setNotes} setSelected={setSelected} activeNote={activeNote} setActiveNote={setActiveNote} setUrl={setUrl} url={url} />
        </div>
      </div>
    </>

  )
}

export default App
