import { useState } from "react";

export default function AddType() {
  const [typeId, setTypeId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    const res = await fetch("http://localhost:8000/api/types", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        type_id: typeId,
        name: name,
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Add Movie Type</h2>

      <input
        placeholder="Type ID"
        value={typeId}
        onChange={(e) => setTypeId(e.target.value)}
      />

      <input
        placeholder="Type Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      {message && <p>{message}</p>}
    </div>
  );
}
