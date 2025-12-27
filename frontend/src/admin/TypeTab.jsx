import AddType from "./type/AddType";
import DeleteType from "./type/DeleteType";
import UpdateType from "./type/UpdateType";
import IndexType from "./type/IndexType";

export default function TypeTab() {
  return (
    <div>
      <h2>Manage Movie Types</h2>

      <AddType />
      <DeleteType />
      <UpdateType />
      <IndexType />
    </div>
  );
}

