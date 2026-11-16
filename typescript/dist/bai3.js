"use strict";
// ### Bài 3: Mảng đa kiểu
Object.defineProperty(exports, "__esModule", { value: true });
// - Khai báo một mảng chứa cả chuỗi và số (`(string | number)[]`) đại diện cho mã nhân viên.
// - Viết hàm duyệt qua mảng và chỉ in ra các phần tử là chuỗi viết hoa.
const maNhanVien = ["NV001", 102, "nv003", 104, "NV005", "Abc", 106];
const inChuoiVietHoa = (mang) => {
    for (const phanTu of mang) {
        if (typeof phanTu === "string" && phanTu === phanTu.toUpperCase()) {
            console.log(phanTu);
        }
    }
};
inChuoiVietHoa(maNhanVien);
//# sourceMappingURL=bai3.js.map