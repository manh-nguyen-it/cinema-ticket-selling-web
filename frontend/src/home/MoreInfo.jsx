import styles from "./MoreInfo.module.css";
import { Link } from 'react-router-dom'

const movies = [
  {
    title: "Quá Nhanh Quá Nguy Hiểm",
    date: "05/06/2023",
    img: "/images/news-1.jpg",
    desc: "Đạo diễn và diễn viên đình đám quay trở lại trong phần mới đầy kịch tính."
  },
  {
    title: "Avatar",
    date: "18/12/2023",
    img: "/images/news-2.png",
    desc: "Hãy cùng đắm mình vào vũ trụ Avatar sống động của đạo diễn James Cameron."
  },
  {
    title: "Joker",
    date: "14/10/2023",
    img: "/images/news-3.png",
    desc: "Joker: Điên có tổ chức – bộ phim tâm lý gây ám ảnh."
  },
  {
    title: "Deadpool 3",
    date: "22/07/2024",
    img: "/images/news-4.jpg",
    desc: "Deadpool chính thức gia nhập MCU với phong cách hài đen quen thuộc."
  },
  {
    title: "Vệ Binh Dải Ngân Hà",
    date: "21/05/2023",
    img: "/images/news-5.jpg",
    desc: "Hành trình cuối cùng của nhóm Guardians of the Galaxy."
  }
];

export default function MoreInfo() {
  return (
    <section className={styles.wrapper}>
      <div>
        <Link to="/news/fast-and-furious">
      <div className={styles.main}>
        <h3 className={styles.title}>Tin mới hôm nay</h3>

        <div className={styles.grid}>
          {movies.map((m, i) => (
            <div key={i} className={`${styles.card} ${i === 0 ? styles.cardBig : ""}`}>
                <div>
                <img src={m.img} alt={m.title} />
                </div>
              <div className={styles.cardContent}>
                <h4>{m.title}</h4>
                <span>{m.date}</span>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Link>
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.box}>
          <h4>⭐ Bạn đánh giá như thế nào về bộ phim này?</h4>
          <p className={styles.movie}>Avatar: Dòng Chảy Của Nước (3D)</p>
          <label><input type="radio" name="rate" /> Tệ</label>
          <label><input type="radio" name="rate" defaultChecked /> Trung bình <span>72%</span></label>
          <label><input type="radio" name="rate" /> Xuất sắc</label>
        </div>

        <div className={styles.box}>
          <h4>Thông báo</h4>
          <p>Rạp hoạt động trở lại từ ngày 01/06. Chi tiết xem tại trang phim đang chiếu.</p>
        </div>

        <div className={styles.box}>
          <h4>Hãy bình chọn cho bộ phim yêu thích của bạn</h4>
          <ul className={styles.voteList}>
            <li><input type="checkbox" /> Shawshank Redemption <span>123</span></li>
            <li><input type="checkbox" /> Quá nhanh quá nguy hiểm <span>83</span></li>
            <li><input type="checkbox" /> Người nhện trở về nhà <span>57</span></li>
            <li><input type="checkbox" /> Indiana Jones và vòng quay định mệnh <span>40</span></li>
            <li><input type="checkbox" /> Transformers: Quái thú trỗi dậy <span>28</span></li>
          </ul>
        </div>
      </aside>
    </section>
  );
}