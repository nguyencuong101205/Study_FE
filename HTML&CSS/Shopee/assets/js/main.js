document.addEventListener('DOMContentLoaded', () => {
  // Modal handling
  const authModal = document.getElementById('auth-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  const registerBtn = document.querySelector('.js-register-btn');
  const loginBtn = document.querySelector('.js-login-btn');
  const closeBtns = document.querySelectorAll('.js-close-modal');

  const switchToLoginBtn = document.querySelector('.js-switch-to-login');
  const switchToRegisterBtn = document.querySelector('.js-switch-to-register');

  function openRegisterModal() {
    authModal.classList.remove('hidden');
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  }

  function openLoginModal() {
    authModal.classList.remove('hidden');
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
  }

  function closeModal() {
    authModal.classList.add('hidden');
  }

  if (registerBtn) registerBtn.addEventListener('click', openRegisterModal);
  if (loginBtn) loginBtn.addEventListener('click', openLoginModal);

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  if (switchToLoginBtn) {
    switchToLoginBtn.addEventListener('click', () => {
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
    });
  }

  if (switchToRegisterBtn) {
    switchToRegisterBtn.addEventListener('click', () => {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
    });
  }

  // Like button toggle
  const likeBtns = document.querySelectorAll('.home-product-item__like');
  likeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('home-product-item__like--liked');
    });
  });

  // Category item active switch
  const categoryItems = document.querySelectorAll('.category-item');
  categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      categoryItems.forEach(cat => cat.classList.remove('category-item--active'));
      item.classList.add('category-item--active');
    });
  });

  // Filter button active switch
  const filterBtns = document.querySelectorAll('.home-filter__btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('btn--primary'));
      btn.classList.add('btn--primary');
    });
  });

  // Search option selection
  const searchSelect = document.querySelector('.header__search-select');
  const searchSelectLabel = document.querySelector('.header__search-select-label');
  const searchOptionItems = document.querySelectorAll('.header__search-option-item');

  searchOptionItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      searchOptionItems.forEach(opt => opt.classList.remove('header__search-option-item--active'));
      item.classList.add('header__search-option-item--active');
      const text = item.querySelector('span').innerText;
      searchSelectLabel.innerText = text;
    });
  });
});
