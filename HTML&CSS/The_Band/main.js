// ==================== AUTO SLIDER LOGIC ====================
var autoplay = true;
var autoplay_Delay = 3500; // Thời gian chuyển slide: 3.5 giây
var autoplayId;
var intervalId;

var slider;
var slider_item_container;
var slider_items;
var indicator_container;
var slider_item_width;
var curIndex = 0;

window.addEventListener("DOMContentLoaded", function () {
  initElement();
  initEvent();
  initModal();
  initMobileMenu();

  if (autoplay && slider_item_container) {
    startAnimation(slider_item_container);
  }
});

// Cập nhật lại chiều rộng khi resize màn hình
window.addEventListener("resize", function () {
  updateSliderWidth();
});

function updateSliderWidth() {
  if (!slider || !slider_item_container || !slider_items.length) return;
  slider_item_width = slider.offsetWidth;

  for (var i = 0; i < slider_items.length; i++) {
    slider_items[i].style.width = slider_item_width + "px";
  }

  slider_item_container.style.width =
    slider_items.length * slider_item_width + "px";
  slider_item_container.style.left = -(curIndex * slider_item_width) + "px";
}

function initElement() {
  slider = document.getElementById("slider");
  if (!slider) return;

  slider_item_container = slider.getElementsByClassName(
    "slieder-item-container",
  )[0];
  slider_items = slider.getElementsByTagName("li");
  indicator_container = slider.getElementsByClassName("indicator-container")[0];

  if (!slider_items.length || !slider_item_container) return;

  // Clone slide đầu tiên gắn vào cuối để tạo hiệu ứng vòng lặp mượt mà
  var firstItem = slider_items[0].cloneNode(true);
  slider_item_container.appendChild(firstItem);

  updateSliderWidth();
}

function initEvent() {
  if (!slider) return;

  // Rê chuột vào slider thì dừng tự động, rời chuột thì chạy tiếp
  slider.addEventListener("mouseover", function () {
    clearTimeout(autoplayId);
    autoplay = false;
  });

  slider.addEventListener("mouseout", function () {
    autoplay = true;
    startAnimation(slider_item_container);
  });

  // Sự kiện click cho các chấm indicator
  if (indicator_container) {
    var indicators = indicator_container.children;
    for (var i = 0; i < indicators.length; i++) {
      indicators[i].setAttribute("index", i);
      indicators[i].addEventListener("click", function () {
        var index = parseInt(this.getAttribute("index"));
        next(index);
      });
    }
  }

  // Sự kiện mũi tên trái / phải
  var left_arrow = slider.getElementsByClassName("left-arrow")[0];
  var right_arrow = slider.getElementsByClassName("right-arrow")[0];

  if (left_arrow) {
    left_arrow.addEventListener("click", function () {
      prev();
    });
  }

  if (right_arrow) {
    right_arrow.addEventListener("click", function () {
      next();
    });
  }
}

function animate(element, target) {
  var step = 25;
  var time = 10;
  var gap = Math.abs(target - element.offsetLeft) / (slider_item_width || 1);
  if (gap > 1) {
    step = step * gap;
    time = time / gap;
  }

  if (element) {
    step = element.offsetLeft > target ? -step : step;
    clearInterval(intervalId);
    setCurrentActiveIndicator(curIndex);

    intervalId = setInterval(function () {
      if (step < 0 && Math.abs(element.offsetLeft + step) < Math.abs(target)) {
        element.style.left = element.offsetLeft + step + "px";
      } else {
        if (Math.abs(target - element.offsetLeft) > Math.abs(step)) {
          element.style.left = element.offsetLeft + step + "px";
        } else {
          clearInterval(intervalId);
          intervalId = -1;
          element.style.left = target + "px";
          if (autoplay) {
            startAnimation(element);
          }
        }
      }
    }, time);
  }
}

function prev() {
  if (!slider_item_container) return;
  var element = slider_item_container;
  var li = element.children;
  curIndex = curIndex - 1;

  if (curIndex < 0) {
    element.style.left = -((li.length - 1) * slider_item_width) + "px";
    curIndex = li.length - 2;
  }
  animate(element, -(curIndex * slider_item_width));
}

function next(nextIndex) {
  if (!slider_item_container) return;
  var element = slider_item_container;
  var li = element.children;

  if (nextIndex != null && typeof nextIndex != "undefined") {
    curIndex = nextIndex;
  } else {
    curIndex = curIndex + 1;
    if (curIndex > li.length - 1) {
      element.style.left = "0px";
      curIndex = 1;
    }
  }
  animate(element, -(curIndex * slider_item_width));
}

function startAnimation(element) {
  if (autoplayId) {
    clearTimeout(autoplayId);
  }
  autoplayId = setTimeout(function () {
    next();
  }, autoplay_Delay);
}

function setCurrentActiveIndicator(index) {
  if (!indicator_container) return;
  var indicators = indicator_container.children;
  if (index >= indicators.length) {
    index = 0;
  }
  for (var i = 0; i < indicators.length; i++) {
    if (i === index) {
      indicators[i].className = "indicator active";
    } else {
      indicators[i].className = "indicator";
    }
  }
}

// ==================== MODAL MUA VÉ ====================
function initModal() {
  var buyBtns = document.querySelectorAll(".js-buy-ticket");
  var modal = document.querySelector(".js-modal");
  var modalContainer = document.querySelector(".js-modal-container");
  var modalClose = document.querySelector(".js-modal-close");

  if (!modal) return;

  function showBuyTickets(e) {
    e.preventDefault();
    modal.classList.add("open");
  }

  function hideBuyTickets() {
    modal.classList.remove("open");
  }

  for (var i = 0; i < buyBtns.length; i++) {
    buyBtns[i].addEventListener("click", showBuyTickets);
  }

  if (modalClose) {
    modalClose.addEventListener("click", hideBuyTickets);
  }

  modal.addEventListener("click", hideBuyTickets);

  if (modalContainer) {
    modalContainer.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  var header = document.getElementById("header");
  var mobileMenu = document.getElementById("mobile-menu");
  if (!header || !mobileMenu) return;

  var headerHeight = header.clientHeight;

  // Đóng / mở mobile menu khi bấm vào icon bars
  mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
      header.style.height = "auto";
    } else {
      header.style.height = null;
    }
  };

  // Tự động đóng menu khi chọn các mục (trừ More có submenu)
  var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
      var isParentMenu =
        this.nextElementSibling &&
        this.nextElementSibling.classList.contains("subnav");
      if (isParentMenu) {
        event.preventDefault();
      } else {
        header.style.height = null;
      }
    };
  }
}
