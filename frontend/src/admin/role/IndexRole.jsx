import { useEffect, useState } from "react";

export default function IndexRole() {
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState("");

  const fetchRoles = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/roles", {
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      setRoles(data);
    } catch (err) {
      setError("Cannot fetch roles");
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div>
      <h2>Role List</h2>

      {error && <p>{error}</p>}

      <table border="1">
        <thead>
          <tr>
            <th>Role ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.role_id}>
              <td>{role.role_id}</td>
              <td>{role.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
