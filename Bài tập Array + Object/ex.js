const orders = [
  {
    orderId: "ORD001",
    customerId: "CUST101",
    customerName: "An",
    items: [
      { name: "Laptop", category: "Electronics", quantity: 1, price: 1200 },
      { name: "Mouse", category: "Electronics", quantity: 2, price: 25 }
    ],
    status: "completed",
    coupon: "SUMMER10"
  },
  {
    orderId: "ORD002",
    customerId: "CUST102",
    customerName: "Bình",
    items: [
      { name: "Shirt", category: "Apparel", quantity: 3, price: 30 },
      { name: "Shoes", category: "Apparel", quantity: 1, price: 80 }
    ],
    status: "completed",
    coupon: null
  },
  {
    orderId: "ORD003",
    customerId: "CUST101",
    customerName: "An",
    items: [
      { name: "Keyboard", category: "Electronics", quantity: 1, price: 75 }
    ],
    status: "pending",
    coupon: null
  },
  {
    orderId: "ORD004",
    customerId: "CUST103",
    customerName: "Chi",
    items: [
      { name: "Book", category: "Books", quantity: 5, price: 15 },
      { name: "Laptop", category: "Electronics", quantity: 1, price: 1200 }
    ],
    status: "completed",
    coupon: "VIP20"
  }
];


function getDiscountRate(coupon) {
  if (coupon === "SUMMER10") return 0.1;
  if (coupon === "VIP20") return 0.2;
  return 0;
}

//  BÀI 1 
function getRevenueByCategory(orders) {
  const revenue = {};

  orders
    .filter(order => order.status === "completed")
    .forEach(order => {
      const discountRate = getDiscountRate(order.coupon);
      const orderSubtotal = order.items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );

      order.items.forEach(item => {
        const itemTotal = item.quantity * item.price;
        // Phân bổ giảm giá theo tỷ lệ của từng item
        const discounted = itemTotal * (1 - discountRate);
        revenue[item.category] = (revenue[item.category] || 0) + discounted;
      });
    });

  // Làm tròn cho đẹp (vì số thực)
  for (const cat in revenue) {
    revenue[cat] = Math.round(revenue[cat]);
  }

  return revenue;
}

// BÀI 2 
function getCustomerStats(orders) {
  const stats = {};

  orders
    .filter(order => order.status === "completed")
    .forEach(order => {
      const { customerId, customerName, items, coupon } = order;
      const discountRate = getDiscountRate(coupon);

      if (!stats[customerId]) {
        stats[customerId] = {
          name: customerName,
          totalSpent: 0,
          uniqueProducts: new Set()
        };
      }

      const orderTotal = items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );
      stats[customerId].totalSpent += orderTotal * (1 - discountRate);

      items.forEach(item => {
        stats[customerId].uniqueProducts.add(item.name);
      });
    });

  // Chuyển Set → Array
  for (const id in stats) {
    stats[id].uniqueProducts = [...stats[id].uniqueProducts];
    stats[id].totalSpent = Math.round(stats[id].totalSpent);
  }

  return stats;
}

// BÀI 3 
function getTopCategory(orders) {
  const revenue = getRevenueByCategory(orders);
  let topCategory = null;
  let maxRevenue = -1;

  for (const [category, rev] of Object.entries(revenue)) {
    if (rev > maxRevenue) {
      maxRevenue = rev;
      topCategory = category;
    }
  }

  return { category: topCategory, revenue: maxRevenue };
}

//  BÀI 4 
function getMarketingReport(orders) {
  const customerStats = getCustomerStats(orders);
  const revenueByCat = getRevenueByCategory(orders);

  // Sắp xếp danh mục theo doanh thu giảm dần
  const sortedCategories = Object.entries(revenueByCat)
    .sort((a, b) => b[1] - a[1])
    .map(([cat]) => cat);

  const report = {};

  for (const [customerId, stat] of Object.entries(customerStats)) {
    // Lấy tất cả category mà khách đã mua (từ uniqueProducts + orders)
    const boughtCategories = new Set();
    orders
      .filter(o => o.customerId === customerId && o.status === "completed")
      .forEach(o => {
        o.items.forEach(item => boughtCategories.add(item.category));
      });

    // Tìm category gợi ý
    let recommended = null;
    for (const cat of sortedCategories) {
      if (!boughtCategories.has(cat)) {
        recommended = cat;
        break;
      }
    }

    report[customerId] = {
      name: stat.name,
      segment: stat.totalSpent >= 1000 ? "VIP" : "Potential",
      recommendedCategory: recommended
    };
  }

  return report;
}

// ==================== TEST ====================
console.log("Bài 1:", getRevenueByCategory(orders));
console.log("Bài 2:", getCustomerStats(orders));
console.log("Bài 3:", getTopCategory(orders));
console.log("Bài 4:", getMarketingReport(orders));