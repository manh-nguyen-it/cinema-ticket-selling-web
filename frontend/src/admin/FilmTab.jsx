import AddFilm from "./film/AddFilm";
import DeleteFilm from "./film/DeleteFilm";
import UpdateFilm from "./film/UpdateFilm";
import IndexFilm from "./film/IndexFilm";

export default function FilmTab() {
  return (
    <div>
      <h2>Manage Films</h2>

      <AddFilm />
      <DeleteFilm />
      <UpdateFilm />
      <IndexFilm />
    </div>
  );
}
