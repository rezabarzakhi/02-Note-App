import { useState } from "react";

function AddNewNotes() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      desc,
      id: Date.now(),
      compeleted: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("")
    setDesc("")
    console.log(newNote);
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form
        className="note-form"
        onSubmit={handleSubmit}>
        <input
          placeholder="Note Title"
          type="text"
          className="text-field"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Note Description ..."
          type="text"
          className="text-field"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button
          type="submit"
          className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNotes;
