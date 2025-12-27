import { useState } from "react";

export default function UpdateBranch() {
  const [branchId, setBranchId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    const res = await fetch(
      `http://localhost:8000/api/branches/${branchId}`,
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
      <h2>Update Branch</h2>

      <input
        placeholder="Branch ID"
        value={branchId}
        onChange={(e) => setBranchId(e.target.value)}
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
