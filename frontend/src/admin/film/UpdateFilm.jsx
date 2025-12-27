import { useState } from "react";

export default function UpdateFilm() {
  const [filmId, setFilmId] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const res = await fetch(
      `http://localhost:8000/api/films/${filmId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          rating,
        }),
      }
    );

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Update Film</h2>

      <input placeholder="Film ID" value={filmId} onChange={e => setFilmId(e.target.value)} />
      <input placeholder="New Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Rating" value={rating} onChange={e => setRating(e.target.value)} />

      <button onClick={handleUpdate}>Update</button>

      {message && <p>{message}</p>}
    </div>
  );
}
