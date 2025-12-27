import { useState } from "react";

export default function DeleteRole() {
  const [roleId, setRoleId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    setMessage("");

    try {
      const res = await fetch(
        `http://localhost:8000/api/roles/${roleId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Delete failed");
    }
  };

  return (
    <div>
      <h2>Delete Role</h2>

      <input
        type="text"
        placeholder="Role ID"
        value={roleId}
        onChange={(e) => setRoleId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>

      {message && <p>{message}</p>}
    </div>
  );
}
