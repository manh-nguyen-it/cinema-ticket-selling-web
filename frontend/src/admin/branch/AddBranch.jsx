import { useState } from "react";

export default function AddBranch() {
  const [branchId, setBranchId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    const res = await fetch("http://localhost:8000/api/branches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        branch_id: branchId,
        name: name,
      }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Add Branch</h2>

      <input
        placeholder="Branch ID"
        value={branchId}
        onChange={(e) => setBranchId(e.target.value)}
      />

      <input
        placeholder="Branch Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      {message && <p>{message}</p>}
    </div>
  );
}
