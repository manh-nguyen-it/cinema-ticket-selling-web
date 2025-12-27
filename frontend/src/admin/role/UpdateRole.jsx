import { useState } from "react";

export default function UpdateRole() {
  const [roleId, setRoleId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    setMessage("");

    try {
      const res = await fetch(
        `http://localhost:8000/api/roles/${roleId}`,
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
    } catch (err) {
      setMessage("Update failed");
    }
  };

  return (
    <div>
      <h2>Update Role</h2>

      <input
        type="text"
        placeholder="Role ID"
        value={roleId}
        onChange={(e) => setRoleId(e.target.value)}
      />

      <input
        type="text"
        placeholder="New name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>

      {message && <p>{message}</p>}
    </div>
  );
}
