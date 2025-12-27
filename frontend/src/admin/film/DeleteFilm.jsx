import { useState } from "react";

export default function DeleteFilm() {
  const [filmId, setFilmId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:8000/api/films/${filmId}`,
      {
        method: "DELETE",
        headers: { Accept: "application/json" },
      }
    );

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Delete Film</h2>

      <input
        placeholder="Film ID"
        value={filmId}
        onChange={e => setFilmId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>

      {message && <p>{message}</p>}
    </div>
  );
}
