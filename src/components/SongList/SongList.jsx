import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import NewSongForm from "../NewSongForm/NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    {
      title: "closer",
      id: 1,
    },
    {
      title: "blank space",
      id: 2,
    },
    {
      title: "just the way you are",
      id: 3,
    },
  ]);

  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect hook ran", age);
  }, [age]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add one to Age: {age}</button>
    </div>
  );
};

export default SongList;
