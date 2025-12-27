# Website bán vé xem phim - Đồ án môn IE104 (Internet và Công nghệ Web)

## Giới thiệu
Đây là dự án **Website bán vé xem phim** được xây dựng theo mô hình frontend – backend tách biệt, phục vụ mục đích học tập và nghiên cứu.

## Công nghệ sử dụng
- **Frontend**: React
- **Backend**: Laravel
- **Cơ sở dữ liệu**: MySQL

### Cấu trúc thư mục
- Folder "database" chứa file SQL script
- Folder "backend" chứa code backend theo Laravel
- Folder "frontend" chứa code frontend theo React

## Hướng dẫn cài đặt và chạy dự án

### Bước 1: Clone source code
```bash
git clone git@github.com:manh-nguyen-it/cinema-ticket-selling-web.git
```

### Bước 2: Chạy Backend (Laravel)
```bash
cd cinema-ticket-selling-web/backend
composer install
cp .env.example .env
nano .env
```
> Cập nhật thông tin **database** và **session** trong file `.env` cho phù hợp.

```bash
php artisan key:generate
php artisan serve
```

Mặc định backend sẽ chạy tại: http://127.0.0.1:8000

### Bước 3: Chạy Frontend (React)
Mở terminal mới:
```bash
cd cinema-ticket-selling-web/frontend
npm install
npm run build
npm run dev
```

Frontend mặc định chạy tại: http://localhost:5173
