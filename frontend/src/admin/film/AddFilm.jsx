import { useState } from "react";

export default function AddFilm() {
  const [filmId, setFilmId] = useState("");
  const [name, setName] = useState("");
  const [typeId, setTypeId] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    const res = await fetch("http://localhost:8000/api/films", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        film_id: filmId,
        name: name,
        type_id: typeId,
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Add Film</h2>

      <input placeholder="Film ID" value={filmId} onChange={e => setFilmId(e.target.value)} />
      <input placeholder="Film Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Type ID" value={typeId} onChange={e => setTypeId(e.target.value)} />

      <button onClick={handleAdd}>Add</button>

      {message && <p>{message}</p>}
    </div>
  );
}
