// ### Bài 3: Trích xuất tên miền từ URL

// Lấy phần tên miền chính (không bao gồm `http://`, `https://`, `www.` và phần đường dẫn phía sau dấu `/`)

// Ví dụ:

// - `https://google.com` ⇒ Lấy `google.com`
// - `http://viblo.asia` ⇒ Lấy `viblo.asia`
// - `https://vnexpress.net` ⇒ Lấy `vnexpress.net`
const urls = [
  `https://google.com`,
  `http://viblo.asia`,
  `https://vnexpress.net`,
];

const regex =/(?:http|https):\/\/(\w+\.[a-z]{2,})/ ;

urls.forEach((url) => {
    const result = url.match(regex) ;
    console.log(result[1] );
});

