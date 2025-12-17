import styles from './Login.module.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className={styles.loginContainer}>
            {/* LEFT BANNER */}
            <div className={styles.left}>
                <img width="400px" src="/images/auth-banner.png" />
            </div>

            {/* RIGHT FORM */}
            <div className={styles.right}>
                <div className={styles.form}>
                    <div className={styles.logo}><img src="/images/logo.png" /></div>

                    <h2>Chào mừng bạn trở lại !</h2>

                    <button className={styles.googleBtn}>
                        <div>
                            <img width="20px" src="images/gg-icon.png"/>
                        </div>
                        <div style={{alignSelf: "center", marginLeft: "10px"}}> Đăng nhập bằng Google</div> 
                    </button>

                    <button className={styles.facebookBtn}>
                        <div>
                            <img width="20px" src="images/facebook-icon.svg"/>
                        </div>
                        <div style={{alignSelf: "center", marginLeft: "10px"}}> Đăng nhập bằng Facebook</div> 
                    </button>

                    <div className={styles.divider}>
                        <span>Hoặc đăng nhập với</span>
                    </div>

                    <input
                        type="text"
                        placeholder="Tài khoản, email, số điện thoại"
                    />

                    <input
                        type="password"
                        placeholder="Mật khẩu"
                    />

                    <div className={styles.forgot}>
                        Quên mật khẩu?
                    </div>

                    <button className={styles.loginBtn}>
                        Đăng nhập
                    </button>

                    <p className={styles.register}>
                        Không có tài khoản?<Link to="/dang-ky"><span> Đăng ký ngay</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
