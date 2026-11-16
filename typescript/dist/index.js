"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===== Bài 1: Hàm tính tổng và định dạng chuỗi =====
const tinhTong = (a, b) => {
    const ketQua = a + b;
    return "Tổng là: " + ketQua;
};
console.log("--Bài 1");
console.log(tinhTong(5, 7));
// ===== Bài 2: Lọc số chẵn =====
const soNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const locSoChan = (mang) => {
    return mang.filter((so) => so % 2 === 0);
};
console.log("--Bài 2");
console.log(locSoChan(soNguyen));
// ===== Bài 3: Mảng đa kiểu =====
const maNhanVien = ["NV001", 102, "nv003", 104, "NV005", "Abc", 106];
const inChuoiVietHoa = (mang) => {
    for (const phanTu of mang) {
        if (typeof phanTu === "string" && phanTu === phanTu.toUpperCase()) {
            console.log(phanTu);
        }
    }
};
console.log("--Bài 3");
inChuoiVietHoa(maNhanVien);
//# sourceMappingURL=index.js.map