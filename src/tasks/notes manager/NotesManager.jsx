import React, { useReducer, useCallback, useMemo, useRef } from "react";
import NoteList from "./NoteList";
import "./notesmanager.css";

const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const SET_SEARCH = "SET_SEARCH";

const noteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { id: Date.now(), text: action.payload }],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

const NotesManager = () => {
  const [state, dispatch] = useReducer(noteReducer, { notes: [], search: "" });
  const inputRef = useRef();

  const handleAddNote = useCallback(() => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: ADD_NOTE, payload: inputRef.current.value });
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  const handleDeleteNote = useCallback((id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  }, []);

  const handleSearchChange = useCallback((event) => {
    dispatch({ type: SET_SEARCH, payload: event.target.value });
  }, []);

  const filteredNotes = useMemo(() => {
    return state.notes.filter((note) =>
      note.text.toLowerCase().includes(state.search.toLowerCase())
    );
  }, [state.notes, state.search]);

  return (
    <div className="notesmanager-container">
      <h1>Notes Manager</h1>
      <input ref={inputRef} type="text" placeholder="Add a new note" />
      <button onClick={handleAddNote}>Add Note</button>
      <input
        type="text"
        placeholder="Search notes"
        value={state.search}
        onChange={handleSearchChange}
      />
      <p>Total Notes: {state.notes.length}</p>
      <NoteList notes={filteredNotes} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default NotesManager;
