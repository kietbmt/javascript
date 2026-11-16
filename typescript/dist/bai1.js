"use strict";
// ### Bài 1: Hàm tính tổng và định dạng chuỗi
Object.defineProperty(exports, "__esModule", { value: true });
// - Viết một hàm nhận vào 2 tham số kiểu `number` và trả về một `string`.
// - Hàm sẽ tính tổng hai số và trả về câu thông báo dạng `"Tổng là: " + Kết quả`.
const tinhTong = (a, b) => {
    const ketQua = a + b;
    return "Tổng là: " + ketQua;
};
console.log(tinhTong(5, 7));
//# sourceMappingURL=bai1.js.map