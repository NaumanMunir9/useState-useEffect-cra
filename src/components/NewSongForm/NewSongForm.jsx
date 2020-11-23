import React, { useState } from "react";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Song Name: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Add Song" />
      </form>
    </div>
  );
};

export default NewSongForm;
