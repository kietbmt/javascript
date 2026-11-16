const text = `Áo giá 250000 VNĐ, quần giá 350000đồng, mua 2 cái giảm 50000 VNĐ. Mã đơn hàng 998877.`;

const regex = /\d+(?=\s*(?:VNĐ|đồng))/gi;
const result = text.match(regex);

console.log(result.join());