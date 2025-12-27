import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <h1>Admin Panel</h1>

      <nav>
        <Link to="/admin/roles">Roles</Link> |{" "}
        <Link to="/admin/types">Types</Link> |{" "}
        <Link to="/admin/films">Films</Link> |{" "}
        <Link to="/admin/branchs">Branch</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}