import styles from "./GS.module.css";

export default function GSl() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            Lễ Hội Phim <br /> Kinh Dị
          </h2>
          <p className={styles.quote}>
            “Đừng bỏ lỡ cơ hội này”
          </p>
        </div>

        {/* Posters */}
        <div className={styles.posters}>
          <img src="/images/poster-1.jpg" alt="Poster 1" />
          <img src="/images/poster-2.jpg" alt="Poster 2" />
          <img src="/images/poster-3.jpg" alt="Poster 3" />
        </div>

        {/* Promotion */}
        <div className={styles.promo}>
          <h3 className={styles.promoTitle}>
            ƯU ĐÃI DỊP HELLOWEEN
          </h3>

          <p className={styles.promoDesc}>
            “Đêm tối đến... và giá đang giảm sâu đến mức đáng sợ”
          </p>

          <ul className={styles.list}>
            <li>
              <strong>1. Khuyến mãi theo khung giờ</strong><br />
              Midnight Ghost Hour: Giảm giá 70% toàn bộ phim kinh dị chiếu
              trong khung giờ từ 00:00 đến 03:00 sáng mỗi ngày.
            </li>

            <li>
              <strong>2. Ưu đãi đặc quyền cho thành viên</strong><br />
              Mỗi gói vé “TRICK-OR-TREAT”: Nhận ngay túi bùa bạch thánh
              toàn bộ những người thân mức giảm từ 10% đến 90%.
            </li>

            <li>
              <strong>3. Quà tặng kèm</strong><br />
              Tặng ngay E-book “Cẩm nang sống sót trong phim kinh dị”
              cho mọi giao dịch trên 200.000 VNĐ.
            </li>
          </ul>

          <p className={styles.note}>
            *Thời gian áp dụng từ 20/10 đến hết 31/10 (Đêm Halloween).
          </p>
        </div>
      </div>
    </section>
  );
}