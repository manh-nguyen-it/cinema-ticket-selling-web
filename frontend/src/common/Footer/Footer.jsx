import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <img src="/images/logo.png" alt="Star Cineplex" className={styles.logo} />
          <h4>Địa Chỉ</h4>
          <p>Trường ĐH Công Nghệ Thông Tin</p>
          <p className={styles.copy}>Copyright © Nhóm 7 môn Internet và công nghệ Web</p>
        </div>
        <div className={styles.col}>
          <h4>Liên Hệ</h4>
          <p><strong>Số điện thoại</strong></p>
          <p>1900123456789</p>
          <p><strong>Địa chỉ Email</strong></p>
          <p>StarCineplex@cineplex.com</p>
        </div>
        <div className={styles.col}>
          <h4>Thông Tin</h4>
          <ul>
            <li>Trang chủ</li>
            <li>Phim</li>
            <li>Rạp Cineplex</li>
            <li>Thành Viên</li>
            <li>Cultureplex</li>
            <li>Tin mới & Ưu đãi</li>
            <li>Vé của tôi</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Hãy thích chúng tôi trên Facebook</h4>
          <div className={styles.fbBox}>
            <img src="/images/cineplex-fb-page-image.png" alt="Facebook" />
          </div>

          <h4 className={styles.followTitle}>Theo dõi chúng tôi</h4>
          <div className={styles.socials}>
            <div>
                <img height="15px" src="/images/youtube-icon.svg" />
                <a href="" className={styles.youtube}> Youtube</a>
            </div>
            <div>
                <img height="15px" src="/images/facebook-icon.svg" />
                <a href="" className={styles.facebook}> Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer