import React, { useState, useEffect, useRef } from 'react';

/**
 * Component CustomDropdown: Một dropdown tùy chỉnh có thể tái sử dụng
 * Props:
 * - icon: (ReactNode) Icon hiển thị (vd: <FaCalendarAlt />)
 * - label: (string) Nhãn chính (vd: "1. Ngày")
 * - options: (Array) Mảng các lựa chọn (vd: [{ id: 1, label: 'Hôm nay' }])
 * - selectedValue: (string) Giá trị đang được chọn (vd: "Hôm nay")
 * - onSelect: (function) Hàm được gọi khi một item được chọn
 * - className: (string) (MỚI) Class tùy chỉnh từ bên ngoài
 */
export default function CustomDropdown({
    icon,
    label,
    options,
    selectedValue,
    onSelect,
    className,  // <-- 1. Chấp nhận 'className' ở đây
    ...rest      // (Tùy chọn) Chấp nhận các props khác như id, data-testid
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref để bắt click bên ngoài

    // Hàm xử lý khi chọn một item
    const handleSelect = (option) => {
        onSelect(option); // Gửi giá trị lên component cha
        setIsOpen(false); // Tự động đóng dropdown
    };

    // Hook này để xử lý việc "click ra ngoài" thì đóng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // Thêm event listener
        document.addEventListener("mousedown", handleClickOutside);
        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    // 2. Sử dụng 'className' ở đây
    return (
        <div
            className={`custom-dropdown ${className || ''}`} // <-- Nối class cũ và class mới
            ref={dropdownRef}
            {...rest} // (Tùy chọn) Truyền các props còn lại vào
        >
            {/* Phần header của dropdown (cái bạn click vào) */}
            <button className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
                <div className="dropdown-label">
                    <span>{label}</span>
                    <strong>{selectedValue || 'Chọn...'}</strong>
                </div>
                {icon}
            </button>

            {/* Danh sách các lựa chọn (chỉ hiện khi isOpen = true) */}
            {isOpen && (
                <ul className="dropdown-list">
                    {options.length > 0 ? (
                        options.map((option) => (
                            <li
                                key={option.id}
                                className="dropdown-item"
                                onClick={() => handleSelect(option)}
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item disabled">Không có lựa chọn</li>
                    )}
                </ul>
            )}
        </div>
    );
}