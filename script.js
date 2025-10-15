// 🥗 ฐานข้อมูลอาหารทั้งหมด
const foods = {
  krapaomoo: {
    name: "ผัดกะเพรา",
    base: 400,
    addons: { "หมูกรอบ": 200, "ไข่ดาว": 160, "หมึก": 120, "กุ้ง": 100, "ไก่": 90 }
  },
  friedrice: {
    name: "ข้าวผัด",
    base: 400,
    addons: { "ไส้กรอก": 80, "ปูอัด": 70, "กุ้ง": 90, "หมู": 100, "ไก่": 80, "ไข่": 70 }
  },
  jokmoo: {
    name: "โจ๊กหมู",
    base: 236,
    addons: { "ไข่ลวก": 70, "หมูเด้ง": 50 }
  },
  hoytod: {
    name: "หอยทอด",
    base: 605,
    addons: {}
  },
  khaotom: {
    name: "ข้าวต้ม",
    base: 0,
    addons: { "หมู": 228, "ปลา": 220, "กุ้ง": 203 }
  },
  mooKrobKuaPrik: {
    name: "หมูกรอบคั่วพริกเกลือ",
    base: 650,
    addons: {}
  },
  gyoNam: {
    name: "เกี๊ยวน้ำ",
    base: 0,
    addons: { "กุ้ง": 310, "หมู": 415 }
  },
  kanomJeen: {
    name: "ขนมจีน",
    base: 0,
    addons: { "แกงเขียวหวานไก่": 506, "น้ำยากะทิ": 526 }
  },
  gaiTommNamPla: {
    name: "ไก่ต้มน้ำปลา",
    base: 610,
    addons: {}
  },
  gaiTeriyaki: {
    name: "ข้าวไก่เทอริยากิ",
    base: 580,
    addons: {}
  },
  khaoSoi: {
    name: "ข้าวซอย",
    base: 0,
    addons: { "ไก่": 600, "เนื้อ": 700, "หมู": 600 }
  },
  kungTod: {
    name: "ข้าวกุ้งทอดเกลือ",
    base: 365,
    addons: {}
  },
  stickyPork: {
    name: "ข้าวเหนียวหมูปิ้ง",
    base: 400,
    addons: {}
  },
  khaoKhaMoo: {
    name: "ข้าวขาหมู",
    base: 600,
    addons: {}
  },
  somTum: {
    name: "ส้มตำ",
    base: 0,
    addons: { "ตำไทย": 180, "ตำปูปลาร้า": 160, "ตำซั่ว": 200, "ตำผลไม้": 200 }
  },
  padThai: {
    name: "ผัดไทย",
    base: 550,
    addons: {}
  },
  radNa: {
    name: "ราดหน้า",
    base: 0,
    addons: { "หมู": 336, "ไก่": 327 }
  },
  suki: {
    name: "สุกี้แห้ง",
    base: 312,
    addons: {}
  },
  stickyChicken: {
    name: "ข้าวเหนียวไก่ย่าง",
    base: 303,
    addons: {}
  },
  kanaMooKrob: {
    name: "คะน้าหมูกรอบ",
    base: 520,
    addons: {}
  },
  todMun: {
    name: "ทอดมัน",
    base: 0,
    addons: { "กุ้ง": 60, "ปลา": 80 }
  },
  greenCurry: {
    name: "แกงเขียวหวาน",
    base: 0,
    addons: { "ไก่": 240, "ลูกชิ้นปลากราย": 240 }
  },
  padPakBung: {
    name: "ผัดผักบุ้ง",
    base: 108,
    addons: {}
  },
  kaiPaLo: {
    name: "ไข่พะโล้",
    base: 110,
    addons: {}
  },
  tomYum: {
    name: "ต้มยำกุ้ง",
    base: 0,
    addons: { "น้ำใส": 300, "น้ำข้น": 467 }
  },
  baMeeMooDaeng: {
    name: "บะหมี่หมูแดง",
    base: 345,
    addons: {}
  },
  mooTod: {
    name: "หมูทอดกระเทียม",
    base: 166,
    addons: {}
  },
  panaeng: {
    name: "ข้าวพะแนง",
    base: 275,
    addons: {}
  },
  khaoManGai: {
    name: "ข้าวมันไก่",
    base: 0,
    addons: { "ไก่ทอด": 696, "ไก่ต้ม": 585 }
  },
  kaomoodeang: {
    name: "ข้าวหมูแดง",
    base: 509,
    addons: {}
};

// 🧮 โหลดข้อมูลเมนูอาหาร
function loadFood(foodId) {
  const food = foods[foodId];
  if (!food) {
    document.getElementById("food-container").innerHTML = `<h2>ไม่พบเมนูนี้</h2>`;
    return;
  }

  const container = document.getElementById("food-container");
  let html = `<h2>${food.name}</h2>`;
  html += `<p>แคลอรี่พื้นฐาน: ${food.base} kcal</p>`;

  if (Object.keys(food.addons).length > 0) {
    html += `<h3>เลือกท็อปปิ้งเพิ่มเติม:</h3>`;
    for (const [addon, kcal] of Object.entries(food.addons)) {
      html += `<label><input type="checkbox" value="${kcal}"> ${addon} (+${kcal} kcal)</label><br>`;
    }
  }

  html += `<button onclick="calculateCalories('${foodId}')">คำนวณแคลอรี่</button>`;
  html += `<p id="result"></p>`;
  container.innerHTML = html;
}

// 🧮 คำนวณแคลอรี่
function calculateCalories(foodId) {
  const food = foods[foodId];
  let total = food.base;
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  checkboxes.forEach(cb => total += Number(cb.value));
  document.getElementById("result").textContent = `รวมทั้งหมด ${total} kcal`;
}

// 🔙 ปุ่มย้อนกลับ
function goBack() {
  window.location.href = "index.html";
}

