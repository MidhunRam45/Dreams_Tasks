import "./notelist.css";

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
