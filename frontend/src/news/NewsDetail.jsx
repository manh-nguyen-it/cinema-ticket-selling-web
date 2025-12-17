import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './detail.module.css';

// Import hình ảnh từ folder upload (giả sử bạn lưu trong src/assets/newsimg/)
// Hãy điều chỉnh đường dẫn '../assets/newsimg/...' nếu thư mục của bạn khác
import imgDirector from '../assets/newsimg/director.png';
import imgMotorbike from '../assets/newsimg/motorbike.png';
import poster1 from '../assets/newsimg/rightposter1.jpg';
import poster2 from '../assets/newsimg/rightposter2.png';
import poster3 from '../assets/newsimg/rightposter3.png';

const NewsDetail = () => {
    // Scroll lên đầu trang khi vào chi tiết
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Header (Giữ nguyên consistency với trang News) */}
            <header className={styles.header}>
                <Link to="/news" className={styles.logo}>
                    <span className={styles.star}>STAR</span>
                    <span className={styles.news}>NEWS</span>
                </Link>
                <div className={styles.searchBox}>
                    <input type="text" placeholder="Tìm kiếm" className={styles.searchInput} />
                </div>
            </header>

            <div className={styles.wrapper}>
                <div className={styles.container}>

                    {/* CỘT TRÁI: NỘI DUNG BÀI VIẾT */}
                    <div className={styles.articleContent}>
                        <h1 className={styles.articleTitle}>
                            ‘Quá nhanh, quá nguy hiểm’ đã quá đuối?
                        </h1>
                        <p className={styles.meta}>
                            by: Hoàng Nhi - Thứ hai, 05/06/2023 06:38 (GMT+7)
                        </p>

                        <div className={styles.lead}>
                            Một nghịch lý là dù loạt 'Fast & Furious' càng ngày càng bị "vắt sữa", các thượng đế của môn nghệ thuật thứ 7 vẫn không thể ngó lơ loạt phim đầy tính giải trí này.
                        </div>

                        <p className={styles.paragraph}>
                            Sau hơn 2 thập kỷ tung hoành trên màn ảnh rộng, <strong>Fast & Furious</strong> từ bệ phóng khiêm tốn nay đã trở thành thương hiệu hành động đình đám. Nhắc tới Fast & Furious là nhắc tới một trong những gã khổng lồ phòng vé thương mại thành công nhất lịch sử với tổng doanh thu lên đến hơn 7 tỷ USD, theo The Numbers.
                        </p>

                        <p className={styles.paragraph}>
                            Tờ này chê kịch bản rườm rà của "Fast X" (tựa Việt: Fast & Furious 10). Bên cạnh đó là phần spin-off mang tên <em>Hobbs & Shaw</em> ra mắt năm 2019. Trung tâm của loạt phim này là các màn đua xe tốc độ kết hợp hành động kịch tính, qua đó đề cao thông điệp về gia đình, đồng đội.
                            "Chúng tôi có thể làm đúng được việc kết thúc câu chuyện". Chính những lời khẳng định mạnh mẽ đó được lặp lại khi gia nhập đoàn làm phim này cũng dựng xoay quanh gia đình ngôi sao Vin Diesel thực hiện. Fast & Furious 10 là phần cuối cùng của hành trình.
                        </p>

                        {/* ẢNH 1: Jason Momoa lái xe */}
                        <img src={imgMotorbike} alt="Jason Momoa" className={styles.articleImage} />
                        <p className={styles.imageCaption}>Jason Momoa mang đến làn gió mới với vai phản diện đồng bóng và nguy hiểm.</p>

                        <p className={styles.paragraph}>
                            Trước đó, nhà sản xuất cũng không ít lần tuyên bố chấm dứt loạt phim, kết thúc chặng hành trình của một trong số series ăn khách nhất mọi thời đại này. Tuy nhiên, thành tích phòng vé khủng khiếp luôn là động lực thôi thúc khiến loạt phim kiếm được tỉ đô thì hãng lại hoãn quyết định khai tử. Thậm chí nhiều diễn viên chính còn khẳng định: "Chỉ cần khán giả còn muốn xem, Fast & Furious sẽ kết thúc sau phần 11".
                        </p>

                        <p className={styles.paragraph}>
                            Cảm nhận mạnh mẽ từ này không đồng nghĩa với việc các nhà làm phim hết ý tưởng. Dù là cho chạy xe điện ảnh "hái ra tiền" như Fast & Furious. Theo đó, phần 11 chỉ khép lại câu chuyện xoay quanh nhân vật chính Dominic Toretto cùng gia đình anh. Các phần phim sau đó có thể khám phá câu chuyện của các tuyến nhân vật phụ khác.
                        </p>

                        <p className={styles.paragraph}>
                            Trước khi trở thành Fast X, Vin Diesel từng ấp ủ ý tưởng Fast & Furious 10 có thể không phải phiên bản thực như kế hoạch ban đầu. Theo anh, Fast X sẽ chia làm 2 phần tách biệt. Tuy nhiên, điều này không thể xảy ra sau thành tích kém phòng vé đáng ngờ ở thị trường của phim.
                        </p>

                        {/* ẢNH 2: Đạo diễn */}
                        <img src={imgDirector} alt="Director on set" className={styles.articleImage} />
                        <p className={styles.imageCaption}>Hậu trường chỉ đạo diễn xuất của bom tấn hành động.</p>

                        <p className={styles.paragraph}>
                            Dự án do Louis Leterrier đạo diễn kiếm được hơn 700 triệu USD trên toàn cầu, trong đó có khoảng 140 triệu USD tại thị trường quốc tế. Doanh thu này thấp hơn chút đỉnh so với F9: The Fast Saga (phát hành năm 2021). Song, con số này là không mong gì làm lu mờ bom tấn gốc có phí sản xuất dự án đó lên tới 340 triệu USD.
                        </p>

                        <p className={styles.paragraph}>
                            Một "nguyên tắc chung" đối với các bom tấn Hollywood là phải kiếm được số tiền gấp 2.5 lần ngân sách để sinh lời. Điều này cũng đồng nghĩa với việc phim phải chạm mốc 850 triệu USD nếu muốn được coi là thành công. Tất nhiên, con số 2,5 không chính xác tuyệt đối. Nhưng rõ ràng doanh thu hơn 700 triệu USD chưa thể làm hài lòng Universal.
                        </p>

                        <Link to="/news" className={styles.backButton}>← Trở về trang tin tức</Link>
                    </div>

                    {/* CỘT PHẢI: POSTER SIDEBAR */}
                    <div className={styles.sidebar}>
                        <img src={poster1} alt="Fast X Poster" className={styles.sidebarPoster} />
                        <img src={poster2} alt="Fast 9 Poster" className={styles.sidebarPoster} />
                        <img src={poster3} alt="Fast Cast Poster" className={styles.sidebarPoster} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetail;