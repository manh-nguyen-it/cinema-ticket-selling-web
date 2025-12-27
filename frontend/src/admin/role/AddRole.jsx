import React, { useState } from "react";

const AddRole = () => {
  const [roleId, setRoleId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("http://localhost:8000/api/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          role_id: roleId,
          name: name
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Add role failed");
        return;
      }

      setMessage("Role added successfully");
      setRoleId("");
      setName("");
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div>
      <h2>Add Role</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Role ID</label><br />
          <input
            type="text"
            value={roleId}
            maxLength={2}
            onChange={(e) => setRoleId(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Role Name</label><br />
          <input
            type="text"
            value={name}
            maxLength={5}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />
        <button type="submit">Add Role</button>
      </form>
    </div>
  );
};

export default AddRole;
