import { useState } from "react";

export default function DeleteBranch() {
  const [branchId, setBranchId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:8000/api/branches/${branchId}`,
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
      <h2>Delete Branch</h2>

      <input
        placeholder="Branch ID"
        value={branchId}
        onChange={(e) => setBranchId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>

      {message && <p>{message}</p>}
    </div>
  );
}
