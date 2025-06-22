import React, { useState } from "react";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    iTitle: "",
    tContent: "",
  });

  function handleClick() {
    props.onAdd(noteContent);
    setNoteContent({ iTitle: "", tContent: "" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="iTitle"
          placeholder="Title"
          value={noteContent.iTitle}
        />
        <textarea
          onChange={handleChange}
          name="tContent"
          placeholder="Take a note..."
          rows="3"
          value={noteContent.tContent}
        />
        <button type="button" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
