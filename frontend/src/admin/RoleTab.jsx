import AddRole from "./role/AddRole";
import DeleteRole from "./role/DeleteRole";
import UpdateRole from "./role/UpdateRole";
import IndexRole from "./role/IndexRole";

export default function RoleTab() {
  return (
    <div>
      <h2>Manage Roles</h2>

      <AddRole />
      <DeleteRole />
      <UpdateRole />
      <IndexRole />
    </div>
  );
}
