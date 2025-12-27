import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import Navigation from "./Navigation.jsx";
import styles from "./style.module.css";

function Header() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) {
      try {
        setUser(JSON.parse(u));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />

      <div style={{ display: "flex", alignSelf: "center" }}>
        <div className={styles.search}>
          <input type="text" placeholder="Tìm phim" />
        </div>

        <div className={styles.loginBtn} ref={dropdownRef}>
  {!user ? (
    <Link to="/dang-nhap">
      <button className={styles.btn}>Đăng nhập</button>
    </Link>
  ) : (
    <div className={styles.avatarWrapper}>
      {/* ADMIN */}

      {/* AVATAR */}
      <img
        src={user.avatar || "/images/usr-avatar.png"}
        alt="avatar"
        className={styles.avatar}
        onClick={() => setOpen(!open)}
      />

      {/* DROPDOWN */}
      {open && (
        <div className={styles.userDropdown}>
          {user.role_id === "R0" && (
        <Link to='/admin' className={styles.userDropdownItem}>Dashboard</Link>
      )}
          
          <Link
            to="/ho-so"
            className={styles.userDropdownItem}
            onClick={() => setOpen(false)}
          >
            Hồ sơ
          </Link>

          <div
            className={styles.userDropdownItem}
            onClick={handleLogout}
            style={{ color: "#ff6b6b" }}
          >
            Đăng xuất
          </div>
        </div>
      )}
    </div>
  )}
</div>

      </div>
    </div>
  );
}

export default Header;
