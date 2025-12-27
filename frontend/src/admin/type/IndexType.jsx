import { useEffect, useState } from "react";

export default function IndexType() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/types", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTypes(data));
  }, []);

  return (
    <div>
      <h2>Movie Types</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Type ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {types.map((type) => (
            <tr key={type.type_id}>
              <td>{type.type_id}</td>
              <td>{type.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
