import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "Cineplex là gì?",
    a: "Cineplex là hệ thống rạp chiếu phim hiện đại, cung cấp trải nghiệm xem phim chất lượng cao với nhiều tiện ích đi kèm."
  },
  {
    q: "Tôi có thể thay đổi chỗ ngồi sau khi đã đặt vé không?",
    a: "Sau khi đặt vé thành công, bạn không thể thay đổi chỗ ngồi. Vui lòng kiểm tra kỹ trước khi thanh toán."
  },
  {
    q: "Tôi có thể đổi suất chiếu và vé xem phim sau khi đã đặt thành công không?",
    a: "Hiện tại Cineplex chưa hỗ trợ đổi suất chiếu hoặc hoàn vé sau khi đặt thành công."
  },
  {
    q: "Thông tin thanh toán của tôi có được bảo mật khi sử dụng Cineplex không?",
    a: "Chúng tôi áp dụng các tiêu chuẩn bảo mật cao để đảm bảo thông tin thanh toán của bạn luôn an toàn."
  },
  {
    q: "Nếu tôi gặp sự cố khi đặt vé qua ứng dụng thì phải làm sao?",
    a: "Bạn có thể liên hệ bộ phận hỗ trợ khách hàng 24/7 qua hotline hoặc email để được hỗ trợ kịp thời."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>NHỮNG CÂU HỎI THƯỜNG GẶP</h2>
      <p className={styles.subtitle}>
        Trả Lời Một Số Câu Hỏi Thường Gặp Một Cách Dễ Dàng Và Nhanh Chóng
      </p>

      <div className={styles.list}>
        {faqs.map((item, i) => (
          <div key={i} className={styles.item}>
            <button className={styles.question} onClick={() => toggle(i)}>
              {item.q}
              <span className={styles.icon}>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className={styles.answer}>{item.a}</div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h3>Bạn Vẫn Còn Câu Hỏi ?</h3>
        <p>Mọi thắc mắc xin liên hệ đến tổng đài hỗ trợ, chúng tôi xin phục vụ bạn 24/7</p>
        <button>Liên hệ ngay</button>
      </div>
    </section>
  );
}