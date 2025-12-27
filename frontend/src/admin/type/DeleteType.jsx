import { useState } from "react";

export default function DeleteType() {
  const [typeId, setTypeId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:8000/api/types/${typeId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Delete Movie Type</h2>

      <input
        placeholder="Type ID"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>

      {message && <p>{message}</p>}
    </div>
  );
}
