import styles from "./CustomRating.module.css";

const reviews = [
  {
    name: "Ada",
    role: "Movie goer",
    avatar: "/images/user1.jpg",
    text: "Tôi hoàn toàn bị cuốn hút vào phần nội dung hấp dẫn và không gian rạp chiếu đẳng cấp 5 sao. Trải nghiệm thật tuyệt vời!"
  },
  {
    name: "Jumi",
    role: "Developer",
    avatar: "/images/user2.jpg",
    text: "Trải nghiệm mua vé online rất tiện lợi. Mọi thứ diễn ra nhanh và mượt mà."
  },
  {
    name: "Jenifer",
    role: "Movie goer",
    avatar: "/images/user3.jpg",
    text: "Âm thanh IMAX sống động, ghế ngồi thoải mái cho cảm giác như đang ở Hollywood."
  },
  {
    name: "Matthew",
    role: "Artist",
    avatar: "/images/user4.jpg",
    text: "Chế độ ưu đãi cho thành viên rất tốt, mình thường xuyên quay lại vì điều đó."
  },
  {
    name: "James",
    role: "Teacher",
    avatar: "/images/user5.jpg",
    text: "Nhân viên hỗ trợ nhiệt tình, dịch vụ khách hàng cực kỳ chuyên nghiệp."
  },
  {
    name: "John",
    role: "Director",
    avatar: "/images/user6.jpg",
    text: "Cineplex mang lại trải nghiệm xem phim cao cấp nhất mà tôi từng có."
  }
];

export default function CustomRating() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>KHÁCH HÀNG NGHĨ GÌ</h2>
      <p className={styles.subtitle}>
        Lắng Nghe Chia Sẻ Từ Những Khán Giả Hài Lòng Của Chúng Tôi
      </p>

      <div className={styles.grid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.text}>“{r.text}”</p>
            <div className={styles.user}>
              <img src={r.avatar} alt={r.name} />
              <div>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
