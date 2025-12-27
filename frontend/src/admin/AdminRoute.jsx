import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch {
    localStorage.removeItem("user");
  }

  if (!user) {
    return <Navigate to="/dang-nhap" replace />;
  }

  // Chỉ admin (R0) mới được vào
  if (user.role_id !== "R0") {
    return <Navigate to="/" replace />;
  }

  return children;
}
