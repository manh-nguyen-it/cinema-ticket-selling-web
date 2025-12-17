import styles from "./style.module.css";
import { Link } from 'react-router-dom'

function PromotionSection() {
  return (
    <section className={styles.promotionWrapper}>
      <div className={styles.promotionHeader}>
        <h2>HIỆN ĐANG CÓ CÁC SUẤT CHIẾU ĐẶC BIỆT VÀ ƯU ĐÃI HẤP DẪN</h2>
        <p>Đừng Bỏ Lỡ Những Điều Sắp Diễn Ra.</p>
      </div>

      <div className={styles.cards}>
        <Link to="/promotion/1">
        <div style={{backgroundImage: 'url(/images/promo-background-1.png)'}} className={styles.card}>
          <div className={styles.overlay} />
        </div>
        </Link>
        <div style={{backgroundImage: 'url(/images/promo-background-2.png)'}} className={styles.card}>
          <div className={styles.overlay} />
        </div>
      </div>
    </section>
  );
}

export default PromotionSection
