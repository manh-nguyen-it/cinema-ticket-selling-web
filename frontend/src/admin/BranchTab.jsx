import { Routes, Route, Link } from "react-router-dom";
import AddBranch from "./branch/AddBranch";
import DeleteBranch from "./branch/DeleteBranch";
import UpdateBranch from "./branch/UpdateBranch";
import IndexBranch from "./branch/IndexBranch";

export default function BranchTab() {
  return (
    <div>
      <h2>Manage Branch</h2>

      <AddBranch />
      <DeleteBranch />
      <UpdateBranch />
      <IndexBranch />
    </div>
  );
}
