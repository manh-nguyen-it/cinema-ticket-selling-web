import { useEffect, useState } from "react";

export default function IndexBranch() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/branches", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setBranches(data));
  }, []);

  return (
    <div>
      <h2>Branch List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((b) => (
            <tr key={b.branch_id}>
              <td>{b.branch_id}</td>
              <td>{b.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
