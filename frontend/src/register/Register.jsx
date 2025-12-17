import styles from './Register.module.css'
import { Link } from 'react-router-dom'

function Register() {
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
                        <input type="text" placeholder="Nhập tên người dùng" />
                    </div>

                    {/* EMAIL */}
                    <div className={styles.field}>
                        <label>Địa chỉ email</label>
                        <input type="email" placeholder="Nhập email" />
                    </div>

                    {/* PASSWORD */}
                    <div className={styles.field}>
                        <label>Mật khẩu</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                            />
                        </div>
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className={styles.field}>
                        <label>Xác nhận mật khẩu</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type='password'
                                placeholder="Nhập lại mật khẩu"
                            />
                        </div>
                    </div>

                    <button className={styles.registerBtn}>
                        Đăng ký
                    </button>

                    <p className={styles.login}>
                        Đã có tài khoản?<Link to="/dang-nhap"><span> Đăng nhập ngay</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
