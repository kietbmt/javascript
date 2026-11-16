"use strict";
// ### Bài 2: Lọc số chẵn
Object.defineProperty(exports, "__esModule", { value: true });
// - Khai báo một mảng chỉ chứa các số nguyên.
// - Viết hàm nhận vào mảng này và trả về một mảng mới chỉ chứa các số chẵn.
const soNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const locSoChan = (mang) => {
    return mang.filter((so) => so % 2 === 0);
};
console.log(locSoChan(soNguyen));
//# sourceMappingURL=bai2.js.map