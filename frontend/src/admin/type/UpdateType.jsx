import { useState } from "react";

export default function UpdateType() {
  const [typeId, setTypeId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const res = await fetch(
      `http://localhost:8000/api/types/${typeId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Update Movie Type</h2>

      <input
        placeholder="Type ID"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />

      <input
        placeholder="New Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>

      {message && <p>{message}</p>}
    </div>
  );
}
