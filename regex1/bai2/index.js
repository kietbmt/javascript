// ### Bài 2: Trích xuất mã màu Hex

// Tìm tất cả các mã màu Hex hợp lệ trong một đoạn văn bản CSS. Mã màu bắt đầu bằng dấu `#`, theo sau là 3 hoặc 6 ký tự thập lục phân (chữ số `0-9` và chữ cái `a-f` không phân biệt hoa thường)

// Input: 

// ```sql
// color: #fff; background: #1A2b3C; border: #12345; invalid: #gggggg;
// ```

// Output:

// ```sql
// #fff, #1A2b3C
// ```
// 
const input = `
color: #fff;
background: #1A2b3C;
border: #12345;
invalid: #gggggg;
`;
const regex = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g;
const result= input.match(regex);
console.log(result);
