import styles from "./ForFurther.module.css";

export default function ForFurther() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Bạn Đã Sẵn Sàng Để Đặt Vé Ngay Hôm Nay Chưa
        </h2>

        <p className={styles.subtitle}>
          Đăng ký để nhận thêm thông tin. Nhập email để tạo mới hoặc
          kích hoạt lại tài khoản.
        </p>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Nhập email"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
}
