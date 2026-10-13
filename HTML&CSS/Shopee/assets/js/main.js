document.addEventListener("DOMContentLoaded", () => {
  // Auth modal
  const authModal = document.getElementById("auth-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");

  const registerBtn = document.querySelector(".js-register-btn");
  const loginBtn = document.querySelector(".js-login-btn");
  const closeBtns = document.querySelectorAll(".js-close-modal");

  const switchToLoginBtn = document.querySelector(".js-switch-to-login");
  const switchToRegisterBtn = document.querySelector(".js-switch-to-register");

  function openRegisterModal() {
    if (!authModal) return;
    authModal.classList.remove("hidden");
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  }

  function openLoginModal() {
    if (!authModal) return;
    authModal.classList.remove("hidden");
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
  }

  function closeModal() {
    if (!authModal) return;
    authModal.classList.add("hidden");
  }

  if (registerBtn) registerBtn.addEventListener("click", openRegisterModal);
  if (loginBtn) loginBtn.addEventListener("click", openLoginModal);

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  if (switchToLoginBtn) {
    switchToLoginBtn.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  }

  if (switchToRegisterBtn) {
    switchToRegisterBtn.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
    });
  }

  // Seach select dropdown
  const searchSelect = document.querySelector(".header__search-select");
  const searchSelectLabel = document.querySelector(
    ".header__search-select-label",
  );
  const searchOptionItems = document.querySelectorAll(
    ".header__search-option-item",
  );

  searchOptionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      searchOptionItems.forEach((opt) =>
        opt.classList.remove("header__search-option-item--active"),
      );
      item.classList.add("header__search-option-item--active");
      const text = item.querySelector("span").innerText;
      searchSelectLabel.innerText = text;
    });
  });

  // Product data
  const products = [
    // Trang 1
    {
      id: 1,
      name: "Card màn hình Gigabyte GeForce RTX 4060 WINDFORCE OC 8GB GDDR6",
      priceOld: "8.990.000đ",
      priceCurrent: "8.091.000đ",
      rawPrice: 8091000,
      sold: "184",
      brand: "Gigabyte",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-27952-gigabyte-geforce-rtx-5060-windforce-max-oc-8g-0-1.jpg",
    },
    {
      id: 2,
      name: "CPU Intel Core i7-14700F Box Chính Hãng (LGA1700 / 20 Core 28 Thread / Turbo 5.4GHz)",
      priceOld: "10.490.000đ",
      priceCurrent: "9.441.000đ",
      rawPrice: 9441000,
      sold: "320",
      brand: "Intel",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-25733-cpu-intel-core-i7-14700f-123.jpg",
    },
    {
      id: 3,
      name: "Bàn phím cơ MIK Shiba TKL RGB Hotswap Gasket Mount Red Switch",
      priceOld: "1.250.000đ",
      priceCurrent: "1.125.000đ",
      rawPrice: 1125000,
      sold: "950",
      brand: "MIK",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-22464-mik--shiba.jpg",
    },
    {
      id: 4,
      name: "Chuột Gaming Logitech G102 Gen2 Lightsync RGB White (8000 DPI)",
      priceOld: "490.000đ",
      priceCurrent: "441.000đ",
      rawPrice: 441000,
      sold: "1.8k",
      brand: "Logitech",
      origin: "Thụy Sĩ",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-17152-logitech-g102-gen2-white.jpg",
    },
    {
      id: 5,
      name: "RAM Kingston Fury BEAST 16GB DDR5 Bus 5600MHz (KF556C40BB-16)",
      priceOld: "1.650.000đ",
      priceCurrent: "1.485.000đ",
      rawPrice: 1485000,
      sold: "560",
      brand: "Kingston",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-29414-ram-kingston-fury-beast-16gb-16x1-ddr5-buss-5600-kf556c40bb-16wp.jpg",
    },
    {
      id: 6,
      name: "Ổ cứng SSD Lexar NM610PRO 500GB M.2 NVMe PCIe Gen 3.0 (Tốc độ 3300MB/s)",
      priceOld: "1.150.000đ",
      priceCurrent: "1.035.000đ",
      rawPrice: 1035000,
      sold: "780",
      brand: "Lexar",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-28092-ssd-lexar-nm610pro-500gb-nvme-m2-03.jpg",
    },
    {
      id: 7,
      name: "Bo mạch chủ Mainboard ASUS PRIME A520M-K DDR4 Socket AM4",
      priceOld: "1.690.000đ",
      priceCurrent: "1.521.000đ",
      rawPrice: 1521000,
      sold: "420",
      brand: "ASUS",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-16994-mainboard-asus-prime-a520m-k.jpg",
    },
    {
      id: 8,
      name: "Nguồn máy tính Corsair RM850e ATX 3.0 (80 Plus Gold / Full Modular / PCIe 5.0)",
      priceOld: "3.290.000đ",
      priceCurrent: "2.961.000đ",
      rawPrice: 2961000,
      sold: "340",
      brand: "Corsair",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-25184-ngu---n-m--y-t--nh-corsair-rm850e-atx-3-0-1.jpeg",
    },
    {
      id: 9,
      name: "Tản nhiệt nước AIO Antec Omni Matrix 360 ARGB Black (Két 360mm / 3 Quạt ARGB)",
      priceOld: "2.590.000đ",
      priceCurrent: "2.331.000đ",
      rawPrice: 2331000,
      sold: "188",
      brand: "Antec",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-30169-t---n-nhi---t-n-----c-antec-omni-matrix-360-argb--360mm--argb--black-_7.jpg",
    },
    {
      id: 10,
      name: "Tai nghe Gaming ASUS ROG Cetra II Core Âm Thanh Hi-Res Jack 3.5mm",
      priceOld: "1.290.000đ",
      priceCurrent: "1.161.000đ",
      rawPrice: 1161000,
      sold: "295",
      brand: "ASUS",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-27035-tai-nghe-asus-rog-cetra-ii-core-1.jpg",
    },

    // Trang 2
    {
      id: 11,
      name: "Card Màn Hình ASUS Dual GeForce RTX 3050 6GB GDDR6",
      priceOld: "5.190.000đ",
      priceCurrent: "4.671.000đ",
      rawPrice: 4671000,
      sold: "512",
      brand: "ASUS",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-27384-asus-dual-rtx-3050-6gb-gddr6-1.jpg",
    },
    {
      id: 12,
      name: "CPU AMD Ryzen 5 3400G Box Chính Hãng (4 Nhân 8 Luồng / Radeon Vega 11)",
      priceOld: "2.890.000đ",
      priceCurrent: "2.601.000đ",
      rawPrice: 2601000,
      sold: "640",
      brand: "AMD",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-27794-cpu-amd-ryzen-5-3400g-001.jpg",
    },
    {
      id: 13,
      name: "Bàn phím cơ Motospeed K103 Black Rainbow LED Gaming",
      priceOld: "450.000đ",
      priceCurrent: "405.000đ",
      rawPrice: 405000,
      sold: "1.1k",
      brand: "Motospeed",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-27941-motospeed-k103-black-01.jpg",
    },
    {
      id: 14,
      name: "Chuột Không Dây Logitech M275 Wireless Nano 2.4GHz Black",
      priceOld: "350.000đ",
      priceCurrent: "315.000đ",
      rawPrice: 315000,
      sold: "2.4k",
      brand: "Logitech",
      origin: "Thụy Sĩ",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-28435-logitech-m275-001.jpg",
    },
    {
      id: 15,
      name: "RAM G.Skill Ripjaws V 16GB (1x16GB) DDR4 3200MHz (F4-3200C16S-16GVK)",
      priceOld: "990.000đ",
      priceCurrent: "891.000đ",
      rawPrice: 891000,
      sold: "1.5k",
      brand: "G.Skill",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-25861-f4-3200c16s-16gvk.jpg",
    },
    {
      id: 16,
      name: "Mainboard MSI PRO A520M-A PRO Socket AM4 M-ATX",
      priceOld: "1.450.000đ",
      priceCurrent: "1.305.000đ",
      rawPrice: 1305000,
      sold: "390",
      brand: "MSI",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-30113-mainboard_msi_pro_a520m.jpg",
    },
    {
      id: 17,
      name: "Nguồn Segotep BN750W 80 Plus Bronze PCIe 5.0 (SG-750B)",
      priceOld: "1.590.000đ",
      priceCurrent: "1.431.000đ",
      rawPrice: 1431000,
      sold: "410",
      brand: "Segotep",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-24785-ngu---n-segotep-bn750w-80-plus-bronze-pcie-5--sg-750b-.jpg",
    },
    {
      id: 18,
      name: "Card Màn Hình INNO3D GEFORCE RTX 3050 6GB TWIN X2 GDDR6",
      priceOld: "4.890.000đ",
      priceCurrent: "4.401.000đ",
      rawPrice: 4401000,
      sold: "270",
      brand: "INNO3D",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-26548-80759_card_man_hinh_inno3d_rtx_3.png",
    },
    {
      id: 19,
      name: "Bàn phím Fuhlen L411 USB Black Siêu Bền Chống Nước",
      priceOld: "220.000đ",
      priceCurrent: "198.000đ",
      rawPrice: 198000,
      sold: "4.8k",
      brand: "Fuhlen",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-7355-250-7355-ban-phim-fuhlen-l411-usb-black-1.jpg",
    },
    {
      id: 20,
      name: "Chuột Motospeed F333 Gaming Black Quang Học LED",
      priceOld: "190.000đ",
      priceCurrent: "171.000đ",
      rawPrice: 171000,
      sold: "830",
      brand: "Motospeed",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-27942-motospeed-f333-black-1.jpg",
    },

    // Trang 3
    {
      id: 21,
      name: "Card Màn Hình Gigabyte RTX 3050 Windforce 6GB OC V2",
      priceOld: "4.990.000đ",
      priceCurrent: "4.491.000đ",
      rawPrice: 4491000,
      sold: "315",
      brand: "Gigabyte",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-29851-geforce-rtx----3050-windforce-oc-v2-6g_01.jpg",
    },
    {
      id: 22,
      name: "Bàn phím cơ văn phòng Logitech K120 USB Chính Hãng",
      priceOld: "180.000đ",
      priceCurrent: "162.000đ",
      rawPrice: 162000,
      sold: "7.2k",
      brand: "Logitech",
      origin: "Thụy Sĩ",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-15000-250-15000-ban-phim-logitech-k120.jpg",
    },
    {
      id: 23,
      name: "CPU Intel Core i7-14700F Box Socket 1700 Tray kèm Fan",
      priceOld: "9.800.000đ",
      priceCurrent: "8.820.000đ",
      rawPrice: 882000,
      sold: "190",
      brand: "Intel",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-25733-cpu-intel-core-i7-14700f-123.jpg",
    },
    {
      id: 24,
      name: "Nguồn máy tính Corsair RM850e 850W PCIe 5.0 White Edition",
      priceOld: "3.490.000đ",
      priceCurrent: "3.141.000đ",
      rawPrice: 3141000,
      sold: "145",
      brand: "Corsair",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-25184-ngu---n-m--y-t--nh-corsair-rm850e-atx-3-0-1.jpeg",
    },
    {
      id: 25,
      name: "RAM Kingston Fury BEAST RGB 16GB DDR5 5600MHz White",
      priceOld: "1.850.000đ",
      priceCurrent: "1.665.000đ",
      rawPrice: 1665000,
      sold: "410",
      brand: "Kingston",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-29414-ram-kingston-fury-beast-16gb-16x1-ddr5-buss-5600-kf556c40bb-16wp.jpg",
    },
    {
      id: 26,
      name: "Ổ cứng SSD Lexar NM610PRO 1TB M.2 NVMe PCIe 3.0",
      priceOld: "1.890.000đ",
      priceCurrent: "1.701.000đ",
      rawPrice: 1701000,
      sold: "620",
      brand: "Lexar",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-28092-ssd-lexar-nm610pro-500gb-nvme-m2-03.jpg",
    },
    {
      id: 27,
      name: "Tản nhiệt nước AIO Antec Omni Matrix 240 ARGB Black",
      priceOld: "1.990.000đ",
      priceCurrent: "1.791.000đ",
      rawPrice: 1791000,
      sold: "210",
      brand: "Antec",
      origin: "Mỹ",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-30169-t---n-nhi---t-n-----c-antec-omni-matrix-360-argb--360mm--argb--black-_7.jpg",
    },
    {
      id: 28,
      name: "Tai Nghe Gaming Asus ROG Cetra II Core Moonlight White",
      priceOld: "1.450.000đ",
      priceCurrent: "1.305.000đ",
      rawPrice: 1305000,
      sold: "175",
      brand: "ASUS",
      origin: "Đài Loan",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-27035-tai-nghe-asus-rog-cetra-ii-core-1.jpg",
    },
    {
      id: 29,
      name: "Chuột Gaming Logitech G102 Gen2 Lightsync Black",
      priceOld: "490.000đ",
      priceCurrent: "441.000đ",
      rawPrice: 441000,
      sold: "3.2k",
      brand: "Logitech",
      origin: "Thụy Sĩ",
      salePercent: "10%",
      isLiked: true,
      img: "https://nguyencongpc.vn/media/product/250-17152-logitech-g102-gen2-white.jpg",
    },
    {
      id: 30,
      name: "Bàn phím cơ MIK Shiba TKL RGB Brown Switch",
      priceOld: "1.250.000đ",
      priceCurrent: "1.125.000đ",
      rawPrice: 1125000,
      sold: "510",
      brand: "MIK",
      origin: "Chính Hãng",
      salePercent: "10%",
      isLiked: false,
      img: "https://nguyencongpc.vn/media/product/250-22464-mik--shiba.jpg",
    },
  ];

  const ITEMS_PER_PAGE = 10;
  const TOTAL_PAGES = Math.ceil(products.length / ITEMS_PER_PAGE); // 3 trang
  let currentPage = 1;

  // Render
  function renderProducts(page) {
    const productGrid = document.querySelector(".home-product .grid__row");
    if (!productGrid) return;

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pageProducts = products.slice(startIndex, endIndex);

    productGrid.innerHTML = pageProducts
      .map(
        (item) => `
      <div class="grid__column-2-4">
        <a class="home-product-item" href="#">
          <div
            class="home-product-item__img"
            style="background-image: url('${item.img}');"
          ></div>
          <h4 class="home-product-item__name">${item.name}</h4>
          <div class="home-product-item__price">
            <span class="home-product-item__price-old">${item.priceOld}</span>
            <span class="home-product-item__price-current">${item.priceCurrent}</span>
          </div>
          <div class="home-product-item__action">
            <span class="home-product-item__like ${item.isLiked ? "home-product-item__like--liked" : ""}">
              <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
              <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
            </span>
            <div class="home-product-item__rating">
              <i class="home-product-item__star--gold fa-solid fa-star"></i>
              <i class="home-product-item__star--gold fa-solid fa-star"></i>
              <i class="home-product-item__star--gold fa-solid fa-star"></i>
              <i class="home-product-item__star--gold fa-solid fa-star"></i>
              <i class="home-product-item__star--gold fa-solid fa-star"></i>
            </div>
            <span class="home-product-item__sold">Đã bán ${item.sold}</span>
          </div>
          <div class="home-product-item__origin">
            <span class="home-product-item__brand">${item.brand}</span>
            <span class="home-product-item__origin-name">${item.origin}</span>
          </div>
          <div class="home-product-item__favourite">
            <i class="fa-solid fa-check"></i>
            <span>Yêu thích</span>
          </div>
          <div class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">${item.salePercent}</span>
            <span class="home-product-item__sale-off-label">GIẢM</span>
          </div>
        </a>
      </div>
    `,
      )
      .join("");

    // Gắn sự kiện Like cho sản phẩm vừa render
    attachLikeEvents();
  }

  // Render lại thanh phân trang bên dưới
  function renderPagination(page) {
    const paginationList = document.querySelector(
      ".pagination.home-product__pagination",
    );
    if (!paginationList) return;

    let html = `
      <li class="pagination-item ${page === 1 ? "pagination-item--disabled" : ""}">
        <a href="#" class="pagination-item__link js-page-prev">
          <i class="pagination-item__icon fa-solid fa-chevron-left"></i>
        </a>
      </li>
    `;

    for (let i = 1; i <= TOTAL_PAGES; i++) {
      html += `
        <li class="pagination-item ${i === page ? "pagination-item--active" : ""}">
          <a href="#" class="pagination-item__link js-page-num" data-page="${i}">${i}</a>
        </li>
      `;
    }

    html += `
      <li class="pagination-item ${page === TOTAL_PAGES ? "pagination-item--disabled" : ""}">
        <a href="#" class="pagination-item__link js-page-next">
          <i class="pagination-item__icon fa-solid fa-chevron-right"></i>
        </a>
      </li>
    `;

    paginationList.innerHTML = html;

    // Gắn sự kiện click cho các nút pagination vừa tạo
    const pageNumBtns = paginationList.querySelectorAll(".js-page-num");
    pageNumBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPage = parseInt(btn.getAttribute("data-page"));
        goToPage(targetPage);
      });
    });

    const prevBtn = paginationList.querySelector(".js-page-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
          goToPage(currentPage - 1);
        }
      });
    }

    const nextBtn = paginationList.querySelector(".js-page-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < TOTAL_PAGES) {
          goToPage(currentPage + 1);
        }
      });
    }
  }

  // Cập nhật thanh mini pagination trên header filter
  function updateMiniPagination(page) {
    const miniCurrent = document.querySelector(".home-filter__page-current");
    const miniPageNum = document.querySelector(".home-filter__page-num");
    const miniPrev = document.querySelector(
      ".home-filter__page-btn:first-child",
    );
    const miniNext = document.querySelector(
      ".home-filter__page-btn:last-child",
    );

    if (miniPageNum) {
      miniPageNum.innerHTML = `<span class="home-filter__page-current">${page}</span>/${TOTAL_PAGES}`;
    }

    if (miniPrev) {
      if (page === 1) {
        miniPrev.classList.add("home-filter__page-btn--disabled");
      } else {
        miniPrev.classList.remove("home-filter__page-btn--disabled");
      }
    }

    if (miniNext) {
      if (page === TOTAL_PAGES) {
        miniNext.classList.add("home-filter__page-btn--disabled");
      } else {
        miniNext.classList.remove("home-filter__page-btn--disabled");
      }
    }
  }
  // Next Page
  function goToPage(page) {
    if (page < 1 || page > TOTAL_PAGES) return;
    currentPage = page;

    renderProducts(currentPage);
    renderPagination(currentPage);
    updateMiniPagination(currentPage);

    const appContainer = document.querySelector(".app__container");
    if (appContainer) {
      appContainer.scrollIntoView({ behavior: "smooth" });
    }
  }

  const miniPrev = document.querySelector(".home-filter__page-btn:first-child");
  const miniNext = document.querySelector(".home-filter__page-btn:last-child");

  if (miniPrev) {
    miniPrev.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    });
  }

  if (miniNext) {
    miniNext.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < TOTAL_PAGES) {
        goToPage(currentPage + 1);
      }
    });
  }

  // Like button handling
  function attachLikeEvents() {
    const likeBtns = document.querySelectorAll(".home-product-item__like");
    likeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.toggle("home-product-item__like--liked");
      });
    });
  }

  // Category item active switch
  const categoryItems = document.querySelectorAll(".category-item");
  categoryItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      categoryItems.forEach((cat) =>
        cat.classList.remove("category-item--active"),
      );
      item.classList.add("category-item--active");
    });
  });

  // Filter button active switch
  const filterBtns = document.querySelectorAll(".home-filter__btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("btn--primary"));
      btn.classList.add("btn--primary");
    });
  });

  goToPage(1);
});
