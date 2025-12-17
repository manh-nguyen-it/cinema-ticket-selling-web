// src/utils/mockData.ts


export const NOW_SHOWING_FILMS = [
  {
    film_id: "F001",
    name: "Avatar: The Way of Water",
    type_id: "T01",
    genre_name: "Hành động / Viễn tưởng",
    period: 192,
    age: 13,
    description: "Jake Sully lives with his newfound family...",
    trailer_video_link: "#",
    photo_link: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  },
  {
    film_id: "F002",
    name: "Mèo Đi Hia: Điều Ước Cuối Cùng",
    type_id: "T02",
    genre_name: "Hoạt hình / Phiêu lưu",
    period: 102,
    age: 0, // 0 tương ứng với P (Phổ biến)
    description: "Puss in Boots discovers that his passion...",
    trailer_video_link: "#",
    photo_link: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
  }];

export const COMING_SOON_FILMS = [
  {
    film_id: "C001",
    name: "Siêu Lừa Gặp Siêu Lầy",
    type_id: "T03",
    genre_name: "Hài / Hành động",
    period: 112,
    age: 16,
    description: "Bộ phim hài hước...",
    trailer_video_link: "#",
    photo_link: "https://image.tmdb.org/t/p/w500/zJrO5gG9Nl3CjU5Yj7sK8j9l5k.jpg",
  },
  {
    film_id: "C002",
    name: "Shazam! Cơn Thịnh Nộ Của Các Vị Thần",
    type_id: "T01",
    genre_name: "Hành động / Phiêu lưu",
    period: 130,
    age: 13,
    description: "...",
    trailer_video_link: "#",
    photo_link: "https://image.tmdb.org/t/p/w500/a3o6guv5s3t3s5c5s5c5s5.jpg", // Link giả lập
  },
  {
    film_id: "C003",
    name: "Vệ Binh Dải Ngân Hà 3",
    type_id: "T01",
    genre_name: "Hành động / Viễn tưởng",
    period: 150,
    age: 13,
    description: "...",
    trailer_video_link: "#",
    photo_link: "https://image.tmdb.org/t/p/w500/r2J02Z2OpKQryPA4F3.jpg",
  },
  // Thêm các phim khác từ ảnh...
];

export const MOCK_SCHEDULE = [
  {
    film_id: "F001",
    name: "Avatar: Dòng Chảy Của Nước (3D)",
    photo_link: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    period: 192,
    rating: "Tốt", // Giả lập đánh giá
    type_name: "3D - Hành động, Thám hiểm",
    actors: "Sam Worthington, Zoe Saldana",
    release_date: "16/12/2022",
    language: "Tiếng Anh",
    showtimes: ["11:00", "14:00", "16:00", "18:30", "20:00"]
  },
  {
    film_id: "F002",
    name: "Hawa",
    photo_link: "https://image.tmdb.org/t/p/w500/8bT4wR8Q5QzQ5QzQ5QzQ5QzQ5.jpg", // Link placeholder
    period: 150,
    rating: "Tốt",
    type_name: "2D - Kịch",
    actors: "Chanchal Chowdhury, Nazifa Tushi",
    release_date: "16/12/2022",
    language: "Bangla",
    showtimes: ["11:00", "16:30"]
  },
  {
    film_id: "F003",
    name: "Người Kiến và Chiến Binh Ong: Thế Giới Lượng Tử (3D)",
    photo_link: "https://image.tmdb.org/t/p/w500/ngl2WerflHXQbDftNSG5QT5PVUR.jpg",
    period: 125,
    rating: "Khá",
    type_name: "3D - Hành động, Thám hiểm",
    actors: "Paul Rudd, Evangeline Lilly",
    release_date: "17/02/2023",
    language: "Tiếng Anh",
    showtimes: ["11:10", "16:30"]
  },
  // Thêm dữ liệu khác tương tự...
];
export const MOCK_DATES = [
  { day: "17", weekday: "Thứ Sáu" },
  { day: "18", weekday: "Thứ Bảy" },
  { day: "19", weekday: "Chủ Nhật" },
  { day: "20", weekday: "Thứ Hai" },
  { day: "21", weekday: "Thứ Ba" },
  { day: "22", weekday: "Thứ Tư" },
];

// src/utils/mockData.js

const INITIAL_REVIEWS = [
  { id: 1, user: "Tuan Anh", score: 9.0, date: "24/11/2022", content: "Phim kỹ xảo quá đỉnh, nội dung cảm động về gia đình. Rất đáng xem ở định dạng IMAX 3D!" },
  { id: 2, user: "Minh Ha", score: 8.5, date: "25/11/2022", content: "Hơi dài nhưng đáng tiền vé. Các cảnh dưới nước đẹp mê hồn." },
  { id: 3, user: "Sophie W.", score: 10, date: "02/12/2022", content: "Tuyệt phẩm của năm. James Cameron không làm thất vọng." },
  { id: 4, user: "User A", score: 7.5, date: "05/12/2022", content: "Cốt truyện hơi đơn giản nhưng hình ảnh đẹp xuất sắc." }
];

// 2. Hàm sinh thêm review giả (để test nút Xem thêm)
const generateMoreReviews = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `extra-${i}`,
    user: `User ${i + 5}`,
    score: Math.floor(Math.random() * 3) + 7, // Random điểm 7-10
    date: "10/12/2022",
    content: "Phim rất hay, mọi người nên ra rạp xem để trải nghiệm hình ảnh tốt nhất! Chắc chắn sẽ xem lại lần nữa."
  }));
};

// 3. Object dữ liệu chính
export const MOCK_MOVIE_DETAIL = {
  film_id: "F001",
  name: "Avatar: Dòng Chảy Của Nước (3D)",
  photo_link: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
  trailer_video_link: "https://www.youtube.com/embed/o5F8MOz_IDw",
  description: "Jake Sully sống với gia đình mới quen của mình được hình thành trên mặt trăng ngoài hệ mặt trời Pandora. Khi một mối đe dọa quen thuộc quay trở lại để hoàn thành những gì đã bắt đầu trước đó, Jake phải làm việc với Neytiri và quân đội của chủng tộc Na'vi để bảo vệ hành tinh của họ.",
  period: 192,
  age: 13,
  release_date: "16/12/2022",
  language: "Tiếng Anh",
  director: "James Cameron",
  genre_name: "Hành động, Viễn tưởng, Phiêu lưu",

  cast: [
    { name: "Sam Worthington", img: "https://image.tmdb.org/t/p/w200/vM1WfcYjPP8MubnbkkPTqJQD1U7.jpg" },
    { name: "Zoe Saldaña", img: "https://image.tmdb.org/t/p/w200/iOVbFW20il66X8ictfQt8365wEl.jpg" },
    { name: "Sigourney Weaver", img: "https://image.tmdb.org/t/p/w200/flfhep27CVxgjyFj1f79xNQJTPs.jpg" },
    { name: "Stephen Lang", img: "https://image.tmdb.org/t/p/w200/n71JebqV0W5kY5F7sNFFX786cT.jpg" },
    { name: "Kate Winslet", img: "https://image.tmdb.org/t/p/w200/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg" },
    { name: "Cliff Curtis", img: "https://image.tmdb.org/t/p/w200/wKeWvN7eD0b7n5zW6uW3.jpg" }
  ],

  average_score: 9.0,
  total_votes: 168,

  // Dữ liệu thanh phần trăm đánh giá
  rating_stats: [
    { label: "Rất Hay", percent: 73, count: 125, color: "#2dd4bf" }, // Màu Teal
    { label: "Hay", percent: 15, count: 27, color: "#fef08a" },     // Màu Vàng
    { label: "Trung Bình", percent: 7, count: 16, color: "#f43f5e" } // Màu Đỏ
  ],

  // Kết hợp review gốc + 12 review giả => Tổng 16 review
  reviews: [...INITIAL_REVIEWS, ...generateMoreReviews(12)]
};
export const MOCK_CINEMAS = [
  {
    id: "cin01",
    name: "CinePlex Thảo Điền",
    address: "Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Quận 2, TP. HCM",
    distance: "2 Km",
    formats: [
      { type: "2D", times: ["10:00", "12:30", "15:00"] },
      { type: "3D", times: ["18:10", "19:30", "21:00", "22:30"] }
    ]
  },
  {
    id: "cin02",
    name: "CinePlex Thủ Đức",
    address: "Tầng 5, Gigamall, 240 Phạm Văn Đồng, TP. Thủ Đức",
    distance: "5 Km",
    formats: [
      { type: "Tiêu Chuẩn", times: ["09:00", "11:30", "14:15", "17:00"] }
    ]
  },
  {
    id: "cin03",
    name: "CinePlex Ba Đình",
    address: "Tầng 3, Lotte Center, Ba Đình, Hà Nội",
    distance: "12 Km",
    formats: [
      { type: "IMAX", times: ["18:00", "20:45"] },
      { type: "2D", times: ["10:15", "13:45", "16:20"] }
    ]
  }
];

export const MOCK_TICKET_TYPES = [
  { id: "adult", name: "Người Lớn", price: 19.07 },
  { id: "student", name: "U20", price: 16.95 },
  { id: "child", name: "Trẻ Em", price: 12.07 }
];
export const MOCK_SEAT_MAP = [
  { row: "A", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
  { row: "B", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
  { row: "C", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
  { row: "D", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
  { row: "E", seats: [1, 2, 3, 4, null, 5, 6, 7, 8, null, 9, 10, 11, 12] },
  { row: "F", seats: [1, 2, 3, 4, 5, null, 6, 7, 8, 9, null, 10, 11, 12, 13, 14] }, // Hàng dài hơn
  { row: "G", seats: [1, 2, 3, 4, 5, null, 6, 7, 8, 9, null, 10, 11, 12, 13, 14] },
  { row: "H", seats: [1, 2, 3, 4, 5, null, 6, 7, 8, 9, null, 10, 11, 12, 13, 14] },
];

// Danh sách các ghế đã bị người khác đặt trước (Mock)
export const BOOKED_SEATS = ["D5", "D6", "E7", "E8", "F10", "G2"];

export const MOCK_FOODS = [
  {
    id: "f1", name: "Bắp Rang Bơ", description: "Bắp rang bơ thơm ngon, giòn rụm",
    price: 7.00, img: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "f2", name: "Combo Burger", description: "1 Burger Bò + 1 Khoai tây chiên",
    price: 9.50, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "f3", name: "Coca Cola", description: "Nước ngọt có ga mát lạnh (L)",
    price: 3.50, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "f4", name: "Hot Dog", description: "Xúc xích nướng kèm mù tạt",
    price: 4.20, img: "https://images.unsplash.com/photo-1612392062122-8d8b9f12630e?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "f5", name: "Khoai Tây Chiên", description: "Khoai tây chiên giòn tan",
    price: 3.00, img: "https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "f6", name: "Trà Đào Cam Sả", description: "Thanh mát, giải nhiệt",
    price: 5.50, img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=300&q=80"
  }
];
// src/utils/mockData.js

// ... (Giữ nguyên các mock data cũ như MOCK_FOODS, MOCK_TICKET_TYPES...)

// --- DỮ LIỆU HỆ THỐNG RẠP ---

export const MOCK_CITIES = [
  "Kiên Giang", "Hải Phòng", "Quảng Ninh", "Yên Bái",
  "Vĩnh Long", "Hà Tĩnh", "Nghệ An", "Phú Yên",
  "Đồng Tháp", "Hậu Giang", "Sơn La", "Đắk Lắk",
  "Tiền Giang", "Thái Nguyên", "Tây Ninh", "Lạng Sơn",
  "Trà Vinh", "Phú Thọ", "Hà Nội", "Khánh Hòa",
  "Hưng Yên", "Kon Tum", "Hồ Chí Minh", "Đồng Nai",
  "Cần Thơ", "Quảng Ngãi", "Đà Nẵng", "Bạc Liêu"
];

export const MOCK_THEATERS_BY_CITY = {
  "Hồ Chí Minh": [
    "Vincom Center Landmark 81", "Lý Chính Thắng",
    "Aeon Tân Phú", "Vincom Đồng Khởi",
    "Menas Mall (CGV CT Plaza)", "Hùng Vương Plaza",
    "Vivo City", "Thảo Điền Pearl",
    "Sutra Củ Chi", "Aeon Bình Tân",
    "Gigamall Thủ Đức", "Pearl Plaza",
    "Pandora City", "Crescent Mall",
    "Hoàng Văn Thụ", "Liberty Citypoint",
    "Vincom Thủ Đức", "Vincom Gò Vấp"
  ],
  "Hà Nội": ["Vincom Bà Triệu", "Aeon Long Biên", "Royal City", "Times City"],
  "Đà Nẵng": ["Vincom Đà Nẵng", "Vĩnh Trung Plaza"],
  // Các tỉnh khác nếu chưa có dữ liệu thật thì để mảng rỗng hoặc demo
  "Cần Thơ": ["Vincom Hùng Vương", "Sense City"],
  "Hải Phòng": ["Vincom Imperia", "TD Plaza"]
};

// Giả lập chi tiết của 1 rạp (Sau này sẽ fetch theo ID rạp)
export const MOCK_THEATER_DETAIL = {
  name: "Vincom Thủ Đức",
  img: "https://images.unsplash.com/photo-1517604931442-71053e3e2c28?auto=format&fit=crop&w=1000&q=80",
  address: "Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, Phường Bình Thọ, Quận Thủ Đức",
  phone: "+84 28 3722 8222",
  mapImg: "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
};
export const MOCK_USER_PROFILE = {
  name: "Luna Caldwell",
  email: "l.caldwell@gmail.com",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80", // Ảnh cô gái
  points: 450, // Điểm hiện tại
  targetPoints: 1000, // Điểm mục tiêu đổi quà
  bookings: 14,
  balance: 127.50
};
export const MOCK_TICKETS = {
  upcoming: [
    {
      id: 1,
      title: "F1 The Movie (2025)",
      duration: "2h 35m",
      poster: "https://images.unsplash.com/photo-1596727147705-54a9d6ed27e6?auto=format&fit=crop&w=400&q=80",
      date: "08/07",
      fullDate: "08/07/2025",
      time: "10:30 AM",
      cinema: "CinePlex Thảo Điền",
      cinemaAddress: "Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Phường Thảo Điền, Quận 2, TP. Hồ Chí Minh",
      seats: "B6, B7, B8, B9",
      seatCount: 4,
      bookingId: "BK146265",

      // Chi tiết thanh toán
      priceBreakdown: {
        adult: { qty: 2, total: 38.14 },
        u20: { qty: 1, total: 16.95 },
        child: { qty: 1, total: 12.42 },
        food: 22.35,
        vat: 1.99,
        total: 80.32
      },
      booker: {
        name: "Luna Phạm",
        phone: "713 215 8779",
        email: "lunapham@gmail.com",
        cardLast4: "3421"
      }
    }
  ],
  history: [
    {
      id: 2,
      title: "Small Things",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80",
      date: "Thứ 3, 22/03/2025 - 19:30",
      cinema: "Thảo Điền",
      seats: "3 Vé - Ghế ngồi tại H6, H7, H8",
      status: "past"
    },
    {
      id: 3,
      title: "The Return",
      poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80",
      date: "Thứ 3, 08/01/2025 - 19:30",
      cinema: "Cộng Hoà",
      seats: "2 Vé - Ghế ngồi tại D5, D6",
      status: "past"
    },
    {
      id: 4,
      title: "The Last Showgirl",
      poster: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=300&q=80",
      date: "Thứ 3, 18/05/2025 - 19:30",
      cinema: "Thủ Đức",
      seats: "2 Vé - Ghế ngồi tại D5, D6",
      status: "past"
    }
  ]
};
export const MOCK_WATCHLIST = [
  {
    id: 101,
    title: "Cách Huấn Luyện Rồng",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&h=350&q=80", // Ảnh rồng
    genre: "Gia đình, Khám phá",
    duration: "2 tiếng 2 phút",
    rating: 8.5,
    ageRating: "PG",
    description: "Trên hòn đảo gỗ ghề Berk, một cậu bé người Viking tên là Hiccup đã thách thức hàng thế kỷ truyền thống khi kết bạn với một con rồng tên Toothless. Tuy nhiên, khi một mối đe dọa cổ xưa xuất hiện...",
    status: "now_showing"
  },
  {
    id: 102,
    title: "Thế Giới Khủng Long: Tái Sinh",
    backdrop: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&h=350&q=80", // Ảnh khủng long
    genre: "Phiêu lưu",
    duration: "2 tiếng",
    rating: 8.5,
    ageRating: "PG",
    description: "Một kỷ nguyên mới bắt đầu khi con người và khủng long buộc phải chung sống. Những bí mật từ phòng thí nghiệm InGen dần được hé lộ, đe dọa sự cân bằng mong manh của hệ sinh thái toàn cầu.",
    status: "now_showing"
  }
];
export const MOCK_RELATED_MOVIES = [
  {
    id: 201,
    title: "Revoir Paris",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80",
    genre: "Lãng mạn",
    duration: "1 tiếng 45 phút",
    rating: 8.5,
    ageRating: "PG-13"
  },
  {
    id: 202,
    title: "Limonov",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80",
    genre: "Hài kịch",
    duration: "2 tiếng 18 phút",
    rating: 7.6,
    ageRating: "PG-13"
  },
  {
    id: 203,
    title: "La Vallée Des Fous",
    poster: "https://images.unsplash.com/photo-1596727147705-54a9d6ed27e6?auto=format&fit=crop&w=300&q=80",
    genre: "Hài kịch",
    duration: "2 tiếng 2 phút",
    rating: 8.5,
    ageRating: "PG-13"
  },
  {
    id: 204,
    title: "Tuche",
    poster: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=300&q=80",
    genre: "Hài",
    duration: "1 tiếng 35 phút",
    rating: 9.0,
    ageRating: "PG-13"
  }
];
// --- BOX OFFICE RANKING (BẢNG XẾP HẠNG) ---
export const MOCK_RANKINGS = [
  {
    rank: 1,
    title: "Avatar: The Way of Water",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80", // Ảnh Avatar giả lập
    revenue: "1.71 BILLION USD",
    isCenter: true // Cờ đánh dấu vị trí trung tâm
  },
  {
    rank: 2,
    title: "Ant-Man and the Wasp: Quantumania",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=400&q=80", // Ảnh Antman giả lập
    revenue: "700 MILLION USD",
    isCenter: false
  },
  {
    rank: 3,
    title: "Creed III",
    poster: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=400&q=80", // Ảnh Creed giả lập
    revenue: "200 MILLION USD",
    isCenter: false
  }
];