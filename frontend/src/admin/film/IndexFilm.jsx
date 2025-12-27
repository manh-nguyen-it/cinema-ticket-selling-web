import { useEffect, useState } from "react";

export default function IndexFilm() {
  const [films, setFilms] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const fetchFilms = () => {
    fetch(
      `http://localhost:8000/api/films?offset=${offset}&limit=${limit}`,
      {
        headers: { Accept: "application/json" },
      }
    )
      .then(res => res.json())
      .then(data => setFilms(data));
  };

  useEffect(() => {
    fetchFilms();
  }, [offset]);

  return (
    <div>
      <h2>Film List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {films.map(film => (
            <tr key={film.film_id}>
              <td>{film.film_id}</td>
              <td>{film.name}</td>
              <td>{film.type_id}</td>
              <td>{film.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setOffset(Math.max(0, offset - limit))}>
        Prev
      </button>
      <button onClick={() => setOffset(offset + limit)}>
        Next
      </button>
    </div>
  );
}
