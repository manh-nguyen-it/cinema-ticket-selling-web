import { useState } from "react";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [usrname, setUsrname] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // 🔴 Validate frontend
    if (!usrname || !email || !passwd || !confirmPasswd) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (passwd !== confirmPasswd) {
      alert("Mật khẩu xác nhận không khớp");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          usrname,
          email,
          passwd,
        }),
      });

      const data = await res.json();

      // ❌ Register thất bại
      if (!res.ok) {
        alert(data.message || "Đăng ký thất bại");
        return;
      }

      // ✅ Thành công
      alert("Đăng ký thành công! Vui lòng đăng nhập");
      navigate("/dang-nhap");

    } catch (err) {
      console.error(err);
      alert("Không thể kết nối server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.left}>
        <img width="400px" src="/images/auth-banner.png" />
      </div>

      <div className={styles.right}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src="/images/logo.png" />
          </div>

          <h2>Hãy tiến hành đăng ký !</h2>

          {/* USERNAME */}
          <div className={styles.field}>
            <label>Tên người dùng</label>
            <input
              type="text"
              placeholder="Nhập tên người dùng"
              value={usrname}
              onChange={(e) => setUsrname(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className={styles.field}>
            <label>Địa chỉ email</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className={styles.field}>
            <label>Mật khẩu</label>
            <div className={styles.passwordWrapper}>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
              />
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className={styles.field}>
            <label>Xác nhận mật khẩu</label>
            <div className={styles.passwordWrapper}>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={confirmPasswd}
                onChange={(e) => setConfirmPasswd(e.target.value)}
              />
            </div>
          </div>

          <button
            className={styles.registerBtn}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>

          <p className={styles.login}>
            Đã có tài khoản?
            <Link to="/dang-nhap">
              <span> Đăng nhập ngay</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
