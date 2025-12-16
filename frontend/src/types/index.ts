// src/types/index.ts

// Tương ứng bảng 'film' trong PDF
export interface Film {
    film_id: string;            // char(4)
    name: string;               // nvarchar(200)
    type_id: string;            // char(3) - FK
    period: number;             // int - Thời lượng
    age: number;                // int - Độ tuổi
    description: string;        // text
    trailer_video_link: string; // varchar(200)
    photo_link: string;         // varchar(200)
}

// Interface mở rộng để hiển thị UI (kết hợp tên thể loại)
export interface FilmDisplay extends Film {
    genre_name: string;
}