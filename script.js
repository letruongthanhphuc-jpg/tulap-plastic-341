/* ============================================================
   Tự Lập 341 – TULAP PLASTIC – script.js
   ============================================================ */

'use strict';

// ============================================================
// PRODUCT DATA – 30 sản phẩm thực tế
// ============================================================
const PRODUCTS = [
  {
    id: 1,
    name: 'Bộ 3 Hộp Thực Phẩm Nhựa Tự Lập - Khóa Bật Cao Cấp',
    price: 45000, oldPrice: 55000,
    image: 'https://picsum.photos/id/10/300/300',
    category: 'hop-thuc-pham', categoryLabel: 'Hộp thực phẩm',
    rating: 4.8, reviews: 428, badge: 'hot', badgeText: 'Bán chạy',
  },
  {
    id: 2,
    name: 'Rổ Nhựa Chữ Nhật Tự Lập Size S',
    price: 12000, oldPrice: null,
    image: 'https://picsum.photos/id/11/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.5, reviews: 312, badge: null, badgeText: null,
  },
  {
    id: 3,
    name: 'Rổ Nhựa Chữ Nhật Tự Lập Size M',
    price: 18000, oldPrice: null,
    image: 'https://picsum.photos/id/12/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.6, reviews: 287, badge: null, badgeText: null,
  },
  {
    id: 4,
    name: 'Rổ Nhựa Chữ Nhật Tự Lập Size L',
    price: 25000, oldPrice: 30000,
    image: 'https://picsum.photos/id/13/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.7, reviews: 201, badge: 'sale', badgeText: 'Sale',
  },
  {
    id: 5,
    name: 'Kệ Chén Dĩa 3 Tầng Có Khay Thoát Nước Tự Lập',
    price: 125000, oldPrice: 155000,
    image: 'https://picsum.photos/id/14/300/300',
    category: 'ke-nha-bep', categoryLabel: 'Kệ nhà bếp',
    rating: 4.9, reviews: 563, badge: 'hot', badgeText: 'Bán chạy',
  },
  {
    id: 6,
    name: 'Ghế Nhựa Lùn Tự Lập - Nhựa Dày Chịu Lực',
    price: 22000, oldPrice: null,
    image: 'https://picsum.photos/id/15/300/300',
    category: 'ghe-nhua', categoryLabel: 'Ghế nhựa',
    rating: 4.4, reviews: 189, badge: null, badgeText: null,
  },
  {
    id: 7,
    name: 'Tủ Nhựa Mini 3 Tầng Đựng Đồ Đa Năng',
    price: 85000, oldPrice: 105000,
    image: 'https://picsum.photos/id/16/300/300',
    category: 'tu-nhua', categoryLabel: 'Tủ nhựa',
    rating: 4.7, reviews: 374, badge: 'sale', badgeText: 'Giảm 19%',
  },
  {
    id: 8,
    name: 'Thùng Rác Nhựa Đạp Chân Tự Lập 10L',
    price: 55000, oldPrice: 65000,
    image: 'https://picsum.photos/id/17/300/300',
    category: 've-sinh', categoryLabel: 'Vệ sinh nhà cửa',
    rating: 4.6, reviews: 298, badge: 'sale', badgeText: 'Sale',
  },
  {
    id: 9,
    name: 'Thùng Rác Nhựa Đạp Chân Tự Lập 20L',
    price: 95000, oldPrice: 115000,
    image: 'https://picsum.photos/id/18/300/300',
    category: 've-sinh', categoryLabel: 'Vệ sinh nhà cửa',
    rating: 4.7, reviews: 215, badge: 'sale', badgeText: 'Giảm 17%',
  },
  {
    id: 10,
    name: 'Hộp Đựng Giày Nhựa Cứng Trong Suốt Cửa Nam Châm',
    price: 35000, oldPrice: 42000,
    image: 'https://picsum.photos/id/19/300/300',
    category: 'tu-nhua', categoryLabel: 'Tủ nhựa',
    rating: 4.8, reviews: 632, badge: 'hot', badgeText: 'Yêu thích',
  },
  {
    id: 11,
    name: 'Móc Áo Nhựa Dẻo Chống Bay Tự Lập (Bộ 10 Cái)',
    price: 28000, oldPrice: null,
    image: 'https://picsum.photos/id/20/300/300',
    category: 've-sinh', categoryLabel: 'Vệ sinh nhà cửa',
    rating: 4.5, reviews: 410, badge: 'new', badgeText: 'Mới',
  },
  {
    id: 12,
    name: 'Thau Nhựa Tròn Tự Lập Size Trung',
    price: 24000, oldPrice: null,
    image: 'https://picsum.photos/id/21/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.3, reviews: 178, badge: null, badgeText: null,
  },
  {
    id: 13,
    name: 'Thau Nhựa Tròn Tự Lập Size Đại',
    price: 38000, oldPrice: 45000,
    image: 'https://picsum.photos/id/22/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.5, reviews: 143, badge: 'sale', badgeText: 'Sale',
  },
  {
    id: 14,
    name: 'Ghế Nhựa Cao Có Tựa Lưng Tự Lập',
    price: 65000, oldPrice: 80000,
    image: 'https://picsum.photos/id/23/300/300',
    category: 'ghe-nhua', categoryLabel: 'Ghế nhựa',
    rating: 4.7, reviews: 325, badge: 'hot', badgeText: 'Bán chạy',
  },
  {
    id: 15,
    name: 'Ghế Nhựa Trung Khang Trang Tự Lập',
    price: 35000, oldPrice: null,
    image: 'https://picsum.photos/id/24/300/300',
    category: 'ghe-nhua', categoryLabel: 'Ghế nhựa',
    rating: 4.4, reviews: 198, badge: null, badgeText: null,
  },
  {
    id: 16,
    name: 'Kệ Gia Vị Nhựa 2 Tầng Có Móc Treo',
    price: 48000, oldPrice: 58000,
    image: 'https://picsum.photos/id/25/300/300',
    category: 'ke-nha-bep', categoryLabel: 'Kệ nhà bếp',
    rating: 4.6, reviews: 267, badge: 'sale', badgeText: 'Giảm 17%',
  },
  {
    id: 17,
    name: 'Hộp Thực Phẩm Tròn Tự Lập 500ml',
    price: 12000, oldPrice: null,
    image: 'https://picsum.photos/id/26/300/300',
    category: 'hop-thuc-pham', categoryLabel: 'Hộp thực phẩm',
    rating: 4.5, reviews: 520, badge: null, badgeText: null,
  },
  {
    id: 18,
    name: 'Hộp Thực Phẩm Tròn Tự Lập 1000ml',
    price: 18000, oldPrice: null,
    image: 'https://picsum.photos/id/27/300/300',
    category: 'hop-thuc-pham', categoryLabel: 'Hộp thực phẩm',
    rating: 4.6, reviews: 384, badge: null, badgeText: null,
  },
  {
    id: 19,
    name: 'Hộp Thực Phẩm Tròn Tự Lập 2000ml',
    price: 26000, oldPrice: 32000,
    image: 'https://picsum.photos/id/28/300/300',
    category: 'hop-thuc-pham', categoryLabel: 'Hộp thực phẩm',
    rating: 4.7, reviews: 291, badge: 'sale', badgeText: 'Sale',
  },
  {
    id: 20,
    name: 'Bình Nước Nhựa Thể Thao Tự Lập Có Dây Đeo 700ml',
    price: 32000, oldPrice: 40000,
    image: 'https://picsum.photos/id/29/300/300',
    category: 'hop-thuc-pham', categoryLabel: 'Hộp thực phẩm',
    rating: 4.8, reviews: 476, badge: 'hot', badgeText: 'Yêu thích',
  },
  {
    id: 21,
    name: 'Khay Đá Nhựa 12 Viên Có Nắp Đậy Tự Lập',
    price: 15000, oldPrice: null,
    image: 'https://picsum.photos/id/30/300/300',
    category: 'ke-nha-bep', categoryLabel: 'Kệ nhà bếp',
    rating: 4.4, reviews: 215, badge: 'new', badgeText: 'Mới',
  },
  {
    id: 22,
    name: 'Rổ Nhựa Tròn Quay Rau Ly Tâm Tự Lập',
    price: 75000, oldPrice: 90000,
    image: 'https://picsum.photos/id/31/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.7, reviews: 183, badge: 'sale', badgeText: 'Giảm 17%',
  },
  {
    id: 23,
    name: 'Ống Cắm Đũa Thìa Nhựa Có Nắp Đậy Chống Bụi',
    price: 29000, oldPrice: null,
    image: 'https://picsum.photos/id/32/300/300',
    category: 'ke-nha-bep', categoryLabel: 'Kệ nhà bếp',
    rating: 4.5, reviews: 256, badge: null, badgeText: null,
  },
  {
    id: 24,
    name: 'Cây Lau Nhà Vắt Phẳng Nhựa Cao Cấp Tự Lập',
    price: 145000, oldPrice: 175000,
    image: 'https://picsum.photos/id/33/300/300',
    category: 've-sinh', categoryLabel: 'Vệ sinh nhà cửa',
    rating: 4.9, reviews: 512, badge: 'hot', badgeText: 'Bán chạy',
  },
  {
    id: 25,
    name: 'Thùng Đựng Gạo Thông Minh 10kg Có Vạch Đo',
    price: 110000, oldPrice: 130000,
    image: 'https://picsum.photos/id/34/300/300',
    category: 'ke-nha-bep', categoryLabel: 'Kệ nhà bếp',
    rating: 4.8, reviews: 389, badge: 'hot', badgeText: 'Bán chạy',
  },
  {
    id: 26,
    name: 'Gáo Múc Nước Nhựa Dày Tự Lập',
    price: 10000, oldPrice: null,
    image: 'https://picsum.photos/id/35/300/300',
    category: 've-sinh', categoryLabel: 'Vệ sinh nhà cửa',
    rating: 4.2, reviews: 134, badge: null, badgeText: null,
  },
  {
    id: 27,
    name: 'Kệ Nhựa Đựng Giày Dép 4 Tầng Sạch Sẽ',
    price: 72000, oldPrice: 89000,
    image: 'https://picsum.photos/id/36/300/300',
    category: 'tu-nhua', categoryLabel: 'Tủ nhựa',
    rating: 4.7, reviews: 298, badge: 'sale', badgeText: 'Giảm 19%',
  },
  {
    id: 28,
    name: 'Bộ Chổi Quét Nhà Và Đồ Hốt Rác Nhựa Tự Lập',
    price: 49000, oldPrice: 59000,
    image: 'https://picsum.photos/id/37/300/300',
    category: 've-sinh', categoryLabel: 'Vệ sinh nhà cửa',
    rating: 4.6, reviews: 362, badge: 'sale', badgeText: 'Sale',
  },
  {
    id: 29,
    name: 'Tủ Nhựa Ngăn Kéo 5 Tầng Đựng Quần Áo Trẻ Em',
    price: 320000, oldPrice: 390000,
    image: 'https://picsum.photos/id/38/300/300',
    category: 'tu-nhua', categoryLabel: 'Tủ nhựa',
    rating: 4.9, reviews: 724, badge: 'hot', badgeText: 'Bán chạy',
  },
  {
    id: 30,
    name: 'Giỏ Nhựa Có Quai Xách Đi Chợ Tự Lập',
    price: 30000, oldPrice: null,
    image: 'https://picsum.photos/id/39/300/300',
    category: 'ro-nhua', categoryLabel: 'Rổ nhựa',
    rating: 4.5, reviews: 271, badge: 'new', badgeText: 'Mới',
  },
];

// ============================================================
// STATE
// ============================================================
let cart     = JSON.parse(localStorage.getItem('tulap_cart')     || '[]');
let wishlist = JSON.parse(localStorage.getItem('tulap_wishlist') || '[]');
let currentCategory = 'all';
let currentSort     = 'default';
let searchQuery     = '';
let displayedCount  = 12;
const PAGE_SIZE     = 6;

// ============================================================
// UTILITIES
// ============================================================
function formatPrice(n) {
  return n.toLocaleString('vi-VN') + '₫';
}

function generateStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function saveCart()     { localStorage.setItem('tulap_cart',     JSON.stringify(cart));     }
function saveWishlist() { localStorage.setItem('tulap_wishlist', JSON.stringify(wishlist)); }

// ============================================================
// TOAST
// ============================================================
let toastTimer = null;

function showToast(message, type = 'default', duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  const icons = { success: '✅', error: '❌', default: '🛒' };
  toast.innerHTML = `<span>${icons[type] || icons.default}</span><span>${message}</span>`;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, duration);
}

// ============================================================
// CART LOGIC
// ============================================================
function getCartItem(id) { return cart.find(i => i.id === id); }

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = getCartItem(productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, image: product.image, price: product.price, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
  showToast(`Đã thêm "<strong>${product.name}</strong>" vào giỏ!`, 'success');

  // bump badge
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
  showToast('Đã xóa sản phẩm khỏi giỏ hàng.', 'default');
}

function changeQty(productId, delta) {
  const item = getCartItem(productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart();
  renderCartItems();
}

function getTotalItems() { return cart.reduce((s, i) => s + i.qty, 0); }
function getTotalPrice() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const label = document.getElementById('cart-count-label');
  const total = getTotalItems();
  if (badge) badge.textContent = total;
  if (label) label.textContent = total;
}

function renderCartItems() {
  const listEl   = document.getElementById('cart-items');
  const emptyEl  = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = '';
    if (emptyEl)  emptyEl.style.display  = 'block';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  listEl.innerHTML = cart.map(item => `
    <li class="cart-item" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)" aria-label="Giảm">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)" aria-label="Tăng">+</button>
        </div>
      </div>
      <button class="cart-remove-btn" onclick="removeFromCart(${item.id})" aria-label="Xóa">✕</button>
    </li>
  `).join('');

  const totalEl = document.getElementById('cart-total');
  if (totalEl)  totalEl.textContent  = formatPrice(getTotalPrice());
  if (footerEl) footerEl.style.display = 'flex';
}

// ============================================================
// WISHLIST
// ============================================================
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
    showToast('Đã thêm vào danh sách yêu thích ❤️', 'success');
  } else {
    wishlist.splice(idx, 1);
    showToast('Đã xóa khỏi danh sách yêu thích.', 'default');
  }
  saveWishlist();
  updateWishlistBtn(productId);
}

function updateWishlistBtn(id) {
  const btn = document.querySelector(`.product-wishlist-btn[data-id="${id}"]`);
  if (!btn) return;
  btn.classList.toggle('active', wishlist.includes(id));
  btn.textContent = wishlist.includes(id) ? '❤️' : '🤍';
}

// ============================================================
// PRODUCT RENDERING
// ============================================================
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (currentCategory !== 'all') {
    list = list.filter(p => p.category === currentCategory);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) || p.categoryLabel.toLowerCase().includes(q)
    );
  }
  if (currentSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  return list;
}

function renderProducts() {
  const grid        = document.getElementById('product-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const resultInfo  = document.getElementById('search-result-info');
  if (!grid) return;

  const filtered = getFilteredProducts();

  // Search info banner
  if (searchQuery.trim() && resultInfo) {
    resultInfo.style.display = 'block';
    resultInfo.innerHTML = `🔍 Tìm thấy <strong>${filtered.length}</strong> sản phẩm cho "<strong>${searchQuery}</strong>"`;
  } else if (resultInfo) {
    resultInfo.style.display = 'none';
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-products-msg">
        <div class="np-icon">😕</div>
        <p>Không tìm thấy sản phẩm phù hợp</p>
      </div>`;
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  const toShow = filtered.slice(0, displayedCount);

  grid.innerHTML = toShow.map((p, i) => `
    <div class="product-card fade-in" data-id="${p.id}" style="transition-delay:${(i % PAGE_SIZE) * 70}ms">
      <div class="product-img-wrap">
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badgeText}</span>` : ''}
        <button class="product-wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}"
          data-id="${p.id}" onclick="toggleWishlist(${p.id})" aria-label="Yêu thích">
          ${wishlist.includes(p.id) ? '❤️' : '🤍'}
        </button>
        <img
          src="${p.image}"
          alt="${p.name}"
          class="product-img"
          loading="lazy"
          onerror="this.src='https://picsum.photos/300/300?grayscale'"
        />
      </div>
      <div class="product-info">
        <div class="product-category">${p.categoryLabel}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars">${generateStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString('vi-VN')})</span>
        </div>
        <div class="product-price-row">
          <div class="price-group">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="add-to-cart-btn" id="add-btn-${p.id}" onclick="handleAddToCart(${p.id},this)" aria-label="Thêm vào giỏ">
            🛒 Thêm
          </button>
        </div>
      </div>
    </div>
  `).join('');

  observeFadeIn();

  if (loadMoreBtn) {
    loadMoreBtn.style.display = filtered.length > displayedCount ? 'inline-flex' : 'none';
  }
}

function handleAddToCart(productId, btn) {
  addToCart(productId);
  btn.classList.add('adding');
  btn.textContent = '✅ Đã thêm';
  setTimeout(() => {
    btn.classList.remove('adding');
    btn.innerHTML = '🛒 Thêm';
  }, 1300);
}

// ============================================================
// INTERSECTION OBSERVER (fade-in)
// ============================================================
function observeFadeIn() {
  const items = document.querySelectorAll('.fade-in:not(.visible)');
  const obs   = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  items.forEach(el => obs.observe(el));
}

// ============================================================
// HERO SLIDER
// ============================================================
let currentSlide  = 0;
let slideInterval = null;

function gotoSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function startSlider() {
  stopSlider();
  slideInterval = setInterval(() => gotoSlide(currentSlide + 1), 5000);
}
function stopSlider() { clearInterval(slideInterval); }

function initSlider() {
  const prev = document.getElementById('slider-prev');
  const next = document.getElementById('slider-next');
  const dots = document.querySelectorAll('.dot');

  prev?.addEventListener('click', () => { gotoSlide(currentSlide - 1); startSlider(); });
  next?.addEventListener('click', () => { gotoSlide(currentSlide + 1); startSlider(); });
  dots.forEach(dot => dot.addEventListener('click', () => { gotoSlide(+dot.dataset.index); startSlider(); }));

  const hero = document.getElementById('hero');
  hero?.addEventListener('mouseenter', stopSlider);
  hero?.addEventListener('mouseleave', startSlider);
  startSlider();
}

// ============================================================
// CART SIDEBAR
// ============================================================
function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function initCart() {
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('continue-btn')?.addEventListener('click', closeCart);

  document.getElementById('checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Giỏ hàng trống! Hãy thêm sản phẩm nhé.', 'error');
      return;
    }
    showToast(`🎉 Đặt hàng thành công! Tổng tiền: ${formatPrice(getTotalPrice())}`, 'success', 4500);
    cart = [];
    saveCart();
    updateCartBadge();
    renderCartItems();
    closeCart();
  });
}

// ============================================================
// HEADER SCROLL
// ============================================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ============================================================
// CATEGORY FILTER
// ============================================================
function initCategoryFilter() {
  document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      currentCategory = link.dataset.category;
      displayedCount  = 12;
      renderProducts();
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ============================================================
// SORT
// ============================================================
function initSortFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSort    = btn.dataset.sort;
      displayedCount = 12;
      renderProducts();
    });
  });
}

// ============================================================
// SEARCH
// ============================================================
function initSearch() {
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');
  let debounce = null;

  const doSearch = () => {
    searchQuery    = input.value;
    displayedCount = 12;
    renderProducts();
    if (searchQuery.trim()) {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  input?.addEventListener('input',   () => { clearTimeout(debounce); debounce = setTimeout(doSearch, 350); });
  btn?.addEventListener('click',     doSearch);
  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter')  doSearch();
    if (e.key === 'Escape') { input.value = ''; searchQuery = ''; renderProducts(); }
  });
}

// ============================================================
// LOAD MORE
// ============================================================
function initLoadMore() {
  document.getElementById('load-more-btn')?.addEventListener('click', () => {
    displayedCount += PAGE_SIZE;
    renderProducts();
  });
}

// ============================================================
// MOBILE HAMBURGER / SEARCH
// ============================================================
function initMobileMenu() {
  const hamburger     = document.getElementById('hamburger');
  const searchWrapper = document.getElementById('search-wrapper');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    const isOpen = hamburger.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    searchWrapper?.classList.toggle('mobile-open', isOpen);
    if (isOpen) document.getElementById('search-input')?.focus();
  });
}

// ============================================================
// WISHLIST HEADER BTN
// ============================================================
function initWishlistBtn() {
  document.getElementById('wishlist-btn')?.addEventListener('click', () => {
    if (wishlist.length === 0) {
      showToast('Danh sách yêu thích trống!', 'default');
    } else {
      showToast(`❤️ Bạn có ${wishlist.length} sản phẩm yêu thích.`, 'success');
    }
  });
}

// ============================================================
// PROMO BUTTONS
// ============================================================
function initPromoButtons() {
  document.getElementById('promo-register-btn')?.addEventListener('click', () => {
    showToast('🎁 Áp dụng thành công! Mua 3 tặng 1 cho đơn hàng tiếp theo.', 'success', 4000);
  });
  document.getElementById('promo-app-btn')?.addEventListener('click', () => {
    showToast('📞 Liên hệ: 0901 341 341 để được hỗ trợ giá sỉ tốt nhất!', 'success', 4500);
  });
}

// ============================================================
// HERO CTA
// ============================================================
function initHeroCTA() {
  ['hero-shop-btn','hero-shop-btn2','hero-shop-btn3','hero-explore-btn'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
function initKeyboard() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCart();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('search-input')?.focus();
    }
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCartItems();
  updateCartBadge();

  initSlider();
  initCart();
  initHeaderScroll();
  initCategoryFilter();
  initSortFilter();
  initSearch();
  initLoadMore();
  initMobileMenu();
  initWishlistBtn();
  initPromoButtons();
  initHeroCTA();
  initKeyboard();

  console.log('%c🛍️ Tự Lập 341 – TULAP PLASTIC loaded!', 'color:#FFD700;font-weight:bold;font-size:16px;background:#1a1a2e;padding:4px 10px;border-radius:6px;');
});
