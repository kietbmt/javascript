// ### Bài 1: Kiểm tra mã sinh viên

// Viết biểu thức Regex kiểm tra tính hợp lệ của một mã sinh viên (khớp toàn bộ chuỗi). Mã hợp lệ bắt đầu bằng 2 chữ cái viết hoa (SV hoặc HV), theo sau là đúng 6 chữ số.

// Ví dụ: SV123456, HV987654

const regex = /^(SV|HV)\d{6}$/;

console.log(regex.test("SV123456")); 
console.log(regex.test("HV987654")); 
console.log(regex.test("SV12345"));  