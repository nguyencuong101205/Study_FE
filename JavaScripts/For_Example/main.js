const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const container = $(".container");
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const line = $(".tabs .line");

let currentIndex = 0;
let autoPlayTimer = null;
const AUTO_PLAY_DELAY = 3000;

function setLinePosition(target) {
  if (!target) return;
  line.style.left = target.offsetLeft + "px";
  line.style.width = target.offsetWidth + "px";
}
function switchTab(index) {
  const currentActiveTab = $(".tab-item.active");
  const currentActivePane = $(".tab-pane.active");

  if (currentActiveTab) currentActiveTab.classList.remove("active");
  if (currentActivePane) currentActivePane.classList.remove("active");

  currentIndex = index;
  const targetTab = tabs[currentIndex];
  const targetPane = panes[currentIndex];

  targetTab.classList.add("active");
  targetPane.classList.add("active");
  setLinePosition(targetTab);
}

function nextTab() {
  const nextIndex = (currentIndex + 1) % tabs.length;
  switchTab(nextIndex);
}

function startAutoPlay() {
  stopAutoPlay();
  autoPlayTimer = setInterval(nextTab, AUTO_PLAY_DELAY);
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

function init() {
  const initialActive = $(".tab-item.active");
  if (initialActive) {
    currentIndex = Array.from(tabs).indexOf(initialActive);
  }
  setLinePosition(tabs[currentIndex]);

  startAutoPlay();
}

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    switchTab(index);

    startAutoPlay();
  };
});

if (container) {
  container.addEventListener("mouseenter", stopAutoPlay);
  container.addEventListener("mouseleave", startAutoPlay);
}

window.addEventListener("resize", () => {
  setLinePosition(tabs[currentIndex]);
});

window.addEventListener("load", init);
init();
