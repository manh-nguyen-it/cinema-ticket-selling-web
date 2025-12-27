import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [usrname, setUsrname] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!usrname || !passwd) {
      alert("Vui lòng nhập đủ thông tin");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ usrname, passwd }),
      });

      const data = await res.json();

      // ❌ Sai tài khoản / mật khẩu
      if (!res.ok || !data.user) {
        alert(data.message || "Sai tài khoản hoặc mật khẩu");
        return;
      }

      // ✅ Đăng nhập thành công
      localStorage.setItem("user", JSON.stringify(data.user));

// Điều hướng theo role
if (data.user.role_id === "R0") {
  navigate("/admin", { replace: true });
} else {
  navigate("/", { replace: true });
}

    } catch (err) {
      console.error(err);
      alert("Không thể kết nối server");
    }
  };

  return (
    <div className={styles.loginContainer}>
      {/* LEFT BANNER */}
      <div className={styles.left}>
        <img width="400px" src="/images/auth-banner.png" />
      </div>

      {/* RIGHT FORM */}
      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src="/images/logo.png" />
          </div>

          <h2>Chào mừng bạn trở lại !</h2>

          {/* SOCIAL LOGIN – GIỮ NGUYÊN */}
          <button className={styles.googleBtn}>
            <div>
              <img width="20px" src="images/gg-icon.png" />
            </div>
            <div style={{ alignSelf: "center", marginLeft: "10px" }}>
              Đăng nhập bằng Google
            </div>
          </button>

          <button className={styles.facebookBtn}>
            <div>
              <img width="20px" src="images/facebook-icon.svg" />
            </div>
            <div style={{ alignSelf: "center", marginLeft: "10px" }}>
              Đăng nhập bằng Facebook
            </div>
          </button>

          <div className={styles.divider}>
            <span>Hoặc đăng nhập với</span>
          </div>

          <input
            type="text"
            placeholder="Tài khoản, email, số điện thoại"
            value={usrname}
            onChange={(e) => setUsrname(e.target.value)}
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />

          <div className={styles.forgot}>Quên mật khẩu?</div>

          <button className={styles.loginBtn} onClick={handleLogin}>
            Đăng nhập
          </button>

          <p className={styles.register}>
            Không có tài khoản?
            <Link to="/dang-ky">
              <span> Đăng ký ngay</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
