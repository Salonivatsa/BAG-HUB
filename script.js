/* ============================================================
   Liceria & Co. — E-Commerce System
   Single source of truth for products, auth, cart, orders
   ============================================================ */

// ── PRODUCT DATA (immutable source of truth) ──────────────────
const PRODUCTS = Object.freeze([
  { id: 'bold-red', name: 'The Bold Red', price: 289, category: 'Work',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop',
    description: 'A striking crimson statement piece. Structured silhouette perfect for the modern professional who refuses to blend in.',
    dimensions: { w: 32, h: 40, d: 14, unit: 'cm' },
    material: 'Premium Italian Pebbled Leather',
    hardware: 'Brushed Gold Brass',
    lining: '100% Organic Cotton Twill',
    careGuide: ['Wipe gently with a damp, soft cloth', 'Condition leather every 3–6 months', 'Store upright in the included dust bag', 'Avoid prolonged direct sunlight & heat', 'Keep away from water and harsh chemicals'],
    fitsInside: ['💻 Laptop (13")', '📱 Phone', '👛 Wallet', '🕶️ Sunglasses', '🔑 Keys', '📓 Notebook A5', '💄 Lipstick', '🖊️ Pen']
  },
  { id: 'sunset-tote', name: 'The Sunset Tote', price: 249, category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop',
    description: 'Warm sunset hues meet effortless functionality. Spacious interior with artisan-crafted details for everyday bold style.',
    dimensions: { w: 38, h: 35, d: 16, unit: 'cm' },
    material: 'Plant-Based Vegan Leather',
    hardware: 'Matte Black Steel',
    lining: 'Recycled Polyester Satin',
    careGuide: ['Clean with mild soap and water', 'Air-dry away from direct heat', 'Store stuffed with tissue paper', 'Apply vegan leather conditioner quarterly', 'Avoid sharp objects near the surface'],
    fitsInside: ['💻 Laptop (15")', '📱 Phone', '👛 Wallet', '🍼 Water Bottle', '🕶️ Sunglasses', '🔑 Keys', '📓 Notebook A4', '🧴 Hand Cream', '☂️ Compact Umbrella']
  },
  { id: 'classic', name: 'The Classic', price: 319, category: 'Travel',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&auto=format&fit=crop',
    description: 'Timeless elegance redefined. Premium leather construction with modern compartments — your go-to from boardroom to weekend.',
    dimensions: { w: 42, h: 30, d: 18, unit: 'cm' },
    material: 'Full-Grain Aniline Leather',
    hardware: 'Polished Silver Zinc Alloy',
    lining: 'Microfiber Suede',
    careGuide: ['Dust with a dry microfiber cloth', 'Use leather cream for conditioning', 'Do not machine wash or iron', 'Store in a cool, dry place', 'Test any cleaner on a hidden spot first'],
    fitsInside: ['💻 Laptop (14")', '📱 Phone', '👛 Wallet', '🍼 Water Bottle', '🕶️ Sunglasses', '🔑 Keys', '📒 Planner', '🎧 Headphones', '📷 Compact Camera']
  },
  { id: 'chic', name: 'The Chic', price: 269, category: 'Travel',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop',
    description: 'Understated luxury with a bold edge. Compact yet surprisingly spacious, designed for those who travel light but live large.',
    dimensions: { w: 26, h: 20, d: 10, unit: 'cm' },
    material: 'Smooth Nappa Lambskin',
    hardware: 'Rose Gold Stainless Steel',
    lining: 'Silk-blend Jacquard',
    careGuide: ['Use a lint-free cloth for daily cleaning', 'Apply lambskin protector spray', 'Stuff with acid-free tissue when storing', 'Avoid rain and moisture exposure', 'Professional cleaning recommended yearly'],
    fitsInside: ['📱 Phone', '👛 Wallet', '🕶️ Sunglasses', '🔑 Keys', '💄 Lipstick', '🪞 Compact Mirror', '💳 Card Holder']
  },
  { id: 'vivid', name: 'The Vivid', price: 299, category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop',
    description: 'Fearless color meets sustainable craftsmanship. Eco-friendly materials that make every outfit unforgettable.',
    dimensions: { w: 34, h: 28, d: 12, unit: 'cm' },
    material: 'Bio-Based Cork & Canvas Blend',
    hardware: 'Antique Brass',
    lining: 'Organic Hemp Cotton',
    careGuide: ['Spot-clean with a damp sponge', 'Allow to air-dry naturally', 'Brush canvas gently to remove dust', 'Re-wax cork surfaces annually', 'Store flat or hanging to retain shape'],
    fitsInside: ['📱 Phone', '👛 Wallet', '🍼 Water Bottle', '🕶️ Sunglasses', '🔑 Keys', '📓 Notebook A5', '💄 Makeup Pouch', '🎧 Earbuds']
  },
  { id: 'essential', name: 'The Essential', price: 229, category: 'Eco',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop',
    description: 'Sustainably sourced, beautifully minimal. The perfect everyday companion — guilt-free style at its finest.',
    dimensions: { w: 30, h: 24, d: 11, unit: 'cm' },
    material: 'Recycled Ocean Plastic Weave',
    hardware: 'Nickel-Free Matte Aluminium',
    lining: 'Upcycled Cotton Jersey',
    careGuide: ['Machine washable at 30°C in a garment bag', 'Tumble dry on low or air-dry', 'Iron on low heat if needed', 'Wipe hardware with a dry cloth', 'Store in the provided cotton pouch'],
    fitsInside: ['📱 Phone', '👛 Wallet', '🕶️ Sunglasses', '🔑 Keys', '💄 Lipstick', '🖊️ Pen', '📒 Small Notebook', '🎧 Earbuds']
  },
]);

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}


// ── AUTH MODULE ────────────────────────────────────────────────
const AUTH_USERS_KEY = 'liceria_users';
const AUTH_SESSION_KEY = 'liceria_session';

function getAllUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || []; }
  catch { return []; }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + c;
    hash |= 0;
  }
  return 'h_' + Math.abs(hash).toString(36);
}

function signUp(name, email, password) {
  if (!name || !email || !password) return { ok: false, msg: 'All fields are required.' };
  if (password.length < 4) return { ok: false, msg: 'Password must be at least 4 characters.' };
  const users = getAllUsers();
  if (users.find(u => u.email === email.toLowerCase())) return { ok: false, msg: 'Email already registered.' };
  const user = { id: 'u_' + Date.now(), name: name.trim(), email: email.toLowerCase().trim(), passwordHash: simpleHash(password) };
  users.push(user);
  saveUsers(users);
  setSession(user);
  return { ok: true, user };
}

function logIn(email, password) {
  if (!email || !password) return { ok: false, msg: 'Please enter email and password.' };
  const users = getAllUsers();
  const user = users.find(u => u.email === email.toLowerCase().trim());
  if (!user) return { ok: false, msg: 'No account found with this email.' };
  if (user.passwordHash !== simpleHash(password)) return { ok: false, msg: 'Incorrect password.' };
  setSession(user);
  return { ok: true, user };
}

function logOut() {
  localStorage.removeItem(AUTH_SESSION_KEY);
  updateAuthUI();
  showToast('Logged out successfully', 'info');
}

function setSession(user) {
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ userId: user.id, name: user.name, email: user.email }));
}

function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY)) || null; }
  catch { return null; }
}


// ── CART MODULE ───────────────────────────────────────────────
function cartKey() {
  const u = getCurrentUser();
  return u ? 'liceria_cart_' + u.userId : 'liceria_cart_guest';
}

function getCart() {
  try { return JSON.parse(localStorage.getItem(cartKey())) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(cartKey(), JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart(cart);
  showToast(`${product.name} added to bag`, 'success');
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.productId !== productId);
  saveCart(cart);
  displayCart();
}

function updateQuantity(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  item.quantity = qty;
  saveCart(cart);
  displayCart();
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);
}

function getCartItemCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function displayCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  if (!cartItems) return;

  const cart = getCart();
  if (cart.length === 0) {
    cartItems.innerHTML = '';
    if (cartEmpty) cartEmpty.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(item => {
    const p = getProductById(item.productId);
    if (!p) return '';
    return `
      <div class="cart-item" data-id="${p.id}">
        <div class="cart-item-img"><img src="${p.image}" alt="${p.name}"/></div>
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <p class="cart-item-cat">${p.category}</p>
          <p class="cart-item-price">$${p.price}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateQuantity('${p.id}', ${item.quantity - 1})">−</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${p.id}', ${item.quantity + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${p.id}')" aria-label="Remove">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>`;
  }).join('');

  if (cartTotal) cartTotal.textContent = '$' + getCartTotal().toFixed(2);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = getCartItemCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}


// ── ORDER & CHECKOUT MODULE ───────────────────────────────────
function ordersKey() {
  const u = getCurrentUser();
  return u ? 'liceria_orders_' + u.userId : null;
}

function addressesKey() {
  const u = getCurrentUser();
  return u ? 'liceria_addresses_' + u.userId : null;
}

function getSavedAddresses() {
  const key = addressesKey();
  if (!key) return [];
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}

function saveAddress(address) {
  const key = addressesKey();
  if (!key) return;
  const addresses = getSavedAddresses();
  // Don't save duplicates
  const isDup = addresses.some(a => a.street === address.street && a.pincode === address.pincode);
  if (!isDup) {
    addresses.push(address);
    localStorage.setItem(key, JSON.stringify(addresses));
  }
}

function getOrders() {
  const key = ordersKey();
  if (!key) return [];
  try { return JSON.parse(localStorage.getItem(key)) || []; }
  catch { return []; }
}

function saveOrders(orders) {
  const key = ordersKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(orders));
}

let tempOrderData = {};
let selectedAddress = null;

function openCheckoutFlow() {
  const user = getCurrentUser();
  if (!user) {
    showToast('Please log in to checkout', 'error');
    openAuthModal('login');
    return;
  }
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Your bag is empty', 'error');
    return;
  }

  // Pre-fill Name & Phone if possible
  document.getElementById('shipName').value = user.name || '';
  
  renderSavedAddresses();

  // Reset UI View
  document.getElementById('stepAddress').classList.add('active');
  document.getElementById('stepPayment').classList.remove('active');
  
  // Update totals
  document.getElementById('checkoutFinalTotal').textContent = '$' + getCartTotal().toFixed(2);

  const modal = document.getElementById('checkoutFlowModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  closeCartSidebar();
}

function closeCheckoutFlowModal() {
  const modal = document.getElementById('checkoutFlowModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderSavedAddresses() {
  const container = document.getElementById('savedAddressesContainer');
  const list = document.getElementById('savedAddressesList');
  if (!container || !list) return;

  const addresses = getSavedAddresses();
  if (addresses.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  list.innerHTML = addresses.map((addr, i) => `
    <div class="saved-address-card" onclick="selectSavedAddress(${i}, this)">
      <div class="sac-header">
        <span class="sac-name">${addr.name}</span>
        <span class="sac-phone">${addr.phone}</span>
      </div>
      <div class="sac-body">
        ${addr.street}<br>${addr.city}, ${addr.state} - ${addr.pincode}
      </div>
    </div>
  `).join('');
}

function selectSavedAddress(index, element) {
  const addresses = getSavedAddresses();
  const addr = addresses[index];
  if(!addr) return;
  
  selectedAddress = addr;
  
  // Highlight card
  document.querySelectorAll('.saved-address-card').forEach(c => c.classList.remove('selected'));
  if (element) element.classList.add('selected');

  // Fill form
  document.getElementById('shipName').value = addr.name;
  document.getElementById('shipPhone').value = addr.phone;
  document.getElementById('shipStreet').value = addr.street;
  document.getElementById('shipCity').value = addr.city;
  document.getElementById('shipState').value = addr.state;
  document.getElementById('shipPincode').value = addr.pincode;
}

function showNewAddressForm() {
  document.getElementById('addressForm').reset();
  const user = getCurrentUser();
  if(user) document.getElementById('shipName').value = user.name;
  document.querySelectorAll('.saved-address-card').forEach(c => c.classList.remove('selected'));
  selectedAddress = null;
}

function validateAndProceedToPayment() {
  const form = document.getElementById('addressForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const address = {
    name: document.getElementById('shipName').value,
    phone: document.getElementById('shipPhone').value,
    street: document.getElementById('shipStreet').value,
    city: document.getElementById('shipCity').value,
    state: document.getElementById('shipState').value,
    pincode: document.getElementById('shipPincode').value
  };

  tempOrderData.address = address;
  
  if (document.getElementById('saveAddressCheck').checked) {
    saveAddress(address);
  }

  // Calculate generic delivery date (+4 days)
  const delDate = new Date();
  delDate.setDate(delDate.getDate() + 4);
  document.getElementById('estDelDate').textContent = delDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  tempOrderData.deliveryDate = delDate.toISOString();

  // Switch tab
  document.getElementById('stepAddress').classList.remove('active');
  document.getElementById('stepPayment').classList.add('active');
}

function backToAddress() {
  document.getElementById('stepPayment').classList.remove('active');
  document.getElementById('stepAddress').classList.add('active');
}

function submitFinalOrder() {
  const user = getCurrentUser();
  if (!user) return;
  
  const cart = getCart();
  if (cart.length === 0) return;

  const payModeObj = document.querySelector('input[name="payMode"]:checked');
  tempOrderData.paymentMethod = payModeObj ? payModeObj.value : 'Unknown';

  const orderItems = cart.map(item => {
    const p = getProductById(item.productId);
    return { productId: item.productId, name: p.name, price: p.price, quantity: item.quantity, image: p.image };
  });

  const order = {
    orderId: 'ORD-' + Date.now().toString(36).toUpperCase(),
    date: new Date().toISOString(),
    deliveryDate: tempOrderData.deliveryDate,
    shippingAddress: tempOrderData.address,
    paymentMethod: tempOrderData.paymentMethod,
    items: orderItems,
    total: getCartTotal(),
    status: 'Processing',
    cancelReason: null
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);

  // Clear cart
  localStorage.removeItem(cartKey());
  updateCartBadge();
  displayCart();

  // Close flow and show success
  closeCheckoutFlowModal();
  showCheckoutConfirmation(order);
  showToast('Order placed effectively! 🎉', 'success');
}

let activeCancelOrderId = null;

function displayOrders() {
  const container = document.getElementById('ordersContainer');
  const emptyOrders = document.getElementById('emptyOrders');
  const ordersSection = document.getElementById('myOrders');
  if (!container) return;

  const user = getCurrentUser();
  if (!user) return;

  const orders = getOrders();
  if (orders.length === 0) {
    container.innerHTML = '';
    if (emptyOrders) emptyOrders.style.display = 'flex';
    return;
  }
  if (emptyOrders) emptyOrders.style.display = 'none';

  container.innerHTML = orders.map(order => `
    <div class="order-card">
      <div class="order-header">
        <div class="order-info">
          <span class="order-id">${order.orderId}</span>
          <span class="order-date">Placed on ${new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} at ${new Date(order.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <span class="order-status ${order.status.toLowerCase()}">${order.status}</span>
      </div>
      
      <div class="order-meta">
        <div class="order-meta-col">
          <h5>Shipping Address</h5>
          <p>${order.shippingAddress ? order.shippingAddress.name + '<br>' + order.shippingAddress.street + '<br>' + order.shippingAddress.city + ', ' + order.shippingAddress.state + ' - ' + order.shippingAddress.pincode : 'Standard Delivery'}</p>
        </div>
        <div class="order-meta-col">
          <h5>Order Details</h5>
          <p>Payment: <strong>${order.paymentMethod || 'Credit Card'}</strong><br>
          Est. Delivery: <strong>${order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Pending'}</strong></p>
        </div>
      </div>

      <div class="order-items">
        ${order.items.map(item => `
          <div class="order-item">
            <img class="order-item-img" src="${item.image}" alt="${item.name}"/>
            <div class="order-item-desc">
              <div class="order-item-name">${item.name}</div>
              <div class="order-item-qty">Qty: ${item.quantity} × $${item.price}</div>
            </div>
            <div class="order-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        `).join('')}
      </div>

      <div class="order-footer">
        <span class="order-total">$${order.total.toFixed(2)}</span>
        <div class="order-actions">
          ${order.status === 'Processing' ? `<button class="btn-outline" style="border-color:var(--red); color:var(--red); padding:0.5rem 1rem; font-size:0.8rem;" onclick="promptCancelOrder('${order.orderId}')">Cancel Order</button>` : ''}
          ${order.status === 'Cancelled' ? `<span class="refund-msg">${getRefundMessage(order)}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function promptCancelOrder(orderId) {
  activeCancelOrderId = orderId;
  document.getElementById('cancelOrderIdText').textContent = orderId;
  const modal = document.getElementById('cancelOrderModal');
  if(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCancelModal() {
  const modal = document.getElementById('cancelOrderModal');
  if(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  activeCancelOrderId = null;
}

function confirmCancelOrder() {
  if(!activeCancelOrderId) return;
  const reason = document.getElementById('cancelReasonSelect').value;
  
  const orders = getOrders();
  const orderIndex = orders.findIndex(o => o.orderId === activeCancelOrderId);
  
  if (orderIndex > -1) {
    orders[orderIndex].status = 'Cancelled';
    orders[orderIndex].cancelReason = reason;
    saveOrders(orders);
    
    showToast('Order Cancelled successfully.', 'info');
    displayOrders();
  }
  
  closeCancelModal();
}

function getRefundMessage(order) {
  const method = order.paymentMethod || '';
  if (method === 'COD') return 'Cancelled before dispatch. No refund required.';
  return 'Refund Initiated. Will reflect in 3-5 business days.';
}

function openOrdersModal() {
  const user = getCurrentUser();
  if (!user) {
    showToast('Please sign in to view orders', 'error');
    openAuthModal('login');
    return;
  }
  
  const section = document.getElementById('myOrders');
  if (section) {
    section.style.display = 'block';
    displayOrders();
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function closeOrdersModal() {
  const section = document.getElementById('myOrders');
  if (section) {
    section.style.display = 'none';
  }
}


// ── UI HELPERS ────────────────────────────────────────────────

// Toast notifications
function showToast(message, type = 'info') {
  const existing = document.querySelectorAll('.toast');
  existing.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// Auth Modal
function openAuthModal(tab = 'login') {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  clearAuthErrors();
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('loginForm').style.display = tab === 'login' ? 'flex' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'flex' : 'none';
  clearAuthErrors();
}

function clearAuthErrors() {
  document.querySelectorAll('.auth-error').forEach(e => e.textContent = '');
}

// Cart Sidebar
function openCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (!sidebar) return;
  displayCart();
  sidebar.classList.add('open');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (!sidebar) return;
  sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

let pmRotX = 0;
let pmRotY = 0;
let pmDragging = false;
let pmDragStartX = 0;
let pmDragStartY = 0;
let pmRotStartX = 0;
let pmRotStartY = 0;

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const modal = document.getElementById('productModal');
  if (!modal) return;

  // Basic fields
  const pmImg = document.getElementById('pmImage');
  pmImg.src = product.image;
  pmImg.alt = product.name;
  pmRotX = 0;
  pmRotY = 0;
  pmImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  
  document.getElementById('pmName').textContent = product.name;
  document.getElementById('pmCategory').textContent = product.category;
  document.getElementById('pmPrice').textContent = '$' + product.price;
  document.getElementById('pmDesc').textContent = product.description;
  document.getElementById('pmAddBtn').onclick = () => addToCart(product.id);

  // ── 360° Drag hint
  const rotateHint = document.getElementById('pm360Hint');
  if (rotateHint) {
    rotateHint.style.display = '';
    rotateHint.style.opacity = '1';
    setTimeout(() => { if (rotateHint) rotateHint.style.opacity = '0'; }, 3000);
  }

  // ── Size Comparison
  const d = product.dimensions;
  const sizeEl = document.getElementById('pmSizeContent');
  if (sizeEl) {
    const maxDim = 42; // largest bag width across all products
    const bagPct = (d.w / maxDim) * 100;
    sizeEl.innerHTML = `
      <div class="size-dims">
        <div class="size-dim"><span>${d.w}</span><small>${d.unit}</small><p>Width</p></div>
        <div class="size-dim"><span>${d.h}</span><small>${d.unit}</small><p>Height</p></div>
        <div class="size-dim"><span>${d.d}</span><small>${d.unit}</small><p>Depth</p></div>
      </div>
      <div class="size-compare">
        <div class="size-bar-label">Size relative to largest bag</div>
        <div class="size-bar-bg"><div class="size-bar-fill" style="width:${bagPct}%"></div></div>
        <div class="size-objects">
          <div class="size-obj"><span>📱</span><small>Phone<br>7×15 cm</small></div>
          <div class="size-obj"><span>🍼</span><small>Bottle<br>7×22 cm</small></div>
          <div class="size-obj" style="background:rgba(26,107,94,0.08);border-color:var(--teal);"><span>👜</span><small>${product.name}<br>${d.w}×${d.h} cm</small></div>
          <div class="size-obj"><span>💻</span><small>Laptop 13"<br>30×21 cm</small></div>
        </div>
      </div>`;
  }

  // ── What Fits Inside
  const fitsEl = document.getElementById('pmFitsContent');
  if (fitsEl) {
    fitsEl.innerHTML = `
      <div class="fits-list">
        ${product.fitsInside.map(item => `<div class="fits-item"><span class="fits-check">✓</span>${item}</div>`).join('')}
      </div>
      <p class="fits-note">* Based on typical item sizes. Actual fit may vary.</p>`;
  }

  // ── Material & Care
  const careEl = document.getElementById('pmCareContent');
  if (careEl) {
    careEl.innerHTML = `
      <div class="care-materials">
        <div class="care-mat-item"><span class="care-mat-label">Material</span><span>${product.material}</span></div>
        <div class="care-mat-item"><span class="care-mat-label">Hardware</span><span>${product.hardware}</span></div>
        <div class="care-mat-item"><span class="care-mat-label">Lining</span><span>${product.lining}</span></div>
      </div>
      <h4 class="care-title">Care Instructions</h4>
      <div class="care-steps">
        ${product.careGuide.map((step, i) => `<div class="care-step"><span class="care-num">${i + 1}</span>${step}</div>`).join('')}
      </div>`;
  }

  // Reset to first tab
  switchPmTab('overview');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Product modal tab switching
function switchPmTab(tab) {
  document.querySelectorAll('.pm-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('.pm-tab-content').forEach(c => c.classList.toggle('active', c.id === 'pmTab_' + tab));
}

// 3D Parallax Drag effect on product image
function initPm360() {
  const imgWrap = document.querySelector('.pm-image');
  if (!imgWrap) return;
  const img = document.getElementById('pmImage');

  function startDrag(clientX, clientY) {
    pmDragging = true; 
    pmDragStartX = clientX; 
    pmDragStartY = clientY;
    pmRotStartX = pmRotX;
    pmRotStartY = pmRotY;
    imgWrap.style.cursor = 'grabbing';
    const hint = document.getElementById('pm360Hint');
    if (hint) hint.style.opacity = '0';
  }

  function moveDrag(clientX, clientY) {
    if (!pmDragging || !img) return;
    const dx = clientX - pmDragStartX;
    const dy = clientY - pmDragStartY;
    
    // Calculate subtle tilt based on drag distance
    let newRotY = pmRotStartY + dx * 0.15;
    let newRotX = pmRotStartX - dy * 0.15; // Invert Y axis for natural feel
    
    // Clamp the rotation so the flat image doesn't flip completely
    newRotX = Math.max(-20, Math.min(20, newRotX));
    newRotY = Math.max(-25, Math.min(25, newRotY));
    
    pmRotX = newRotX;
    pmRotY = newRotY;
    
    // Apply 3D tilt with a slight scale up for pop
    img.style.transform = `perspective(1000px) rotateX(${pmRotX}deg) rotateY(${pmRotY}deg) scale(1.05)`;
  }

  function endDrag() {
    pmDragging = false; 
    if (imgWrap) imgWrap.style.cursor = 'grab'; 
    // Snap back to 0 smoothly
    if (img) {
      img.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
      img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      pmRotX = 0;
      pmRotY = 0;
      setTimeout(() => { if(img) img.style.transition = ''; }, 400); // Remove transition for next drag
    }
  }

  imgWrap.addEventListener('mousedown', (e) => {
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => moveDrag(e.clientX, e.clientY));
  window.addEventListener('mouseup', endDrag);

  // Touch support
  imgWrap.addEventListener('touchstart', (e) => {
    startDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    moveDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  window.addEventListener('touchend', endDrag);
}
initPm360();

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Checkout confirmation
function showCheckoutConfirmation(order) {
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;
  document.getElementById('confirmOrderId').textContent = order.orderId;
  document.getElementById('confirmTotal').textContent = '$' + order.total.toFixed(2);
  document.getElementById('confirmCount').textContent = order.items.reduce((s, i) => s + i.quantity, 0) + ' item(s)';
  modal.classList.add('active');
  closeCartSidebar();
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  displayOrders();
}

// User Dropdown
function toggleUserDropdown() {
  const dd = document.getElementById('userDropdown');
  if (dd) dd.classList.toggle('active');
}

// Update Auth UI (navbar)
function updateAuthUI() {
  const user = getCurrentUser();
  const loginBtn = document.getElementById('navLoginBtn');
  const userArea = document.getElementById('navUserArea');
  const userName = document.getElementById('navUserName');
  const ordersLink = document.getElementById('navOrdersLink');

  if (user) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (userArea) userArea.style.display = 'flex';
    if (userName) userName.textContent = user.name;
    if (ordersLink) ordersLink.style.display = '';
  } else {
    if (loginBtn) loginBtn.style.display = '';
    if (userArea) userArea.style.display = 'none';
    if (ordersLink) ordersLink.style.display = 'none';
  }
  updateCartBadge();
}


// ── RENDER SHOP PRODUCTS ──────────────────────────────────────
function renderShopProducts() {
  const grid = document.getElementById('shopGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <div class="shop-card" data-id="${p.id}">
      <div class="shop-card-img" onclick="openProductModal('${p.id}')">
        <img src="${p.image}" alt="${p.name}"/>
        <div class="shop-card-overlay">
          <span>Quick View</span>
        </div>
      </div>
      <div class="shop-card-body">
        <span class="shop-card-cat">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="shop-card-bottom">
          <span class="shop-card-price">$${p.price}</span>
          <button class="shop-add-btn" onclick="addToCart('${p.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}


// ── EVENT BINDINGS (run on DOMContentLoaded) ──────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render products
  renderShopProducts();

  // Auth UI state
  updateAuthUI();

  // Cart badge
  updateCartBadge();

  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const result = logIn(email, password);
      if (result.ok) {
        closeAuthModal();
        updateAuthUI();
        showToast(`Welcome back, ${result.user.name}! 👋`, 'success');
      } else {
        document.getElementById('loginError').textContent = result.msg;
      }
    });
  }

  // Signup form
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const result = signUp(name, email, password);
      if (result.ok) {
        closeAuthModal();
        updateAuthUI();
        showToast(`Welcome to Liceria & Co., ${result.user.name}! ✨`, 'success');
      } else {
        document.getElementById('signupError').textContent = result.msg;
      }
    });
  }

  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
  });

  // Close auth modal on overlay click
  const authModal = document.getElementById('authModal');
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAuthModal();
    });
  }

  // Close product modal on overlay click
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // Close checkout modal on overlay click
  const checkoutModal = document.getElementById('checkoutModal');
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  // Close orders modal on overlay click
  const ordersModal = document.getElementById('ordersModal');
  if (ordersModal) {
    ordersModal.addEventListener('click', (e) => {
      if (e.target === ordersModal) closeOrdersModal();
    });
  }

  // Cart overlay click
  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCartSidebar);
  }

  // Close user dropdown on outside click
  document.addEventListener('click', (e) => {
    const dd = document.getElementById('userDropdown');
    const userArea = document.getElementById('navUserArea');
    if (dd && dd.classList.contains('active') && userArea && !userArea.contains(e.target)) {
      dd.classList.remove('active');
    }
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuthModal();
      closeProductModal();
      closeCheckoutModal();
      closeCancelModal();
      closeCartSidebar();
      const dd = document.getElementById('userDropdown');
      if (dd) dd.classList.remove('active');
    }
  });

  // Checkout button
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      openCheckoutFlow();
    });
  }
});


// ── ORIGINAL ANIMATIONS (preserved) ──────────────────────────

// LOADER
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2100);
});

// NAV shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 4px 24px rgba(0,0,0,0.07)' : 'none';
});

// PARALLAX HERO
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const ht = document.querySelector('.hero-text');
  const hi = document.querySelector('.hero-image-area');
  if (ht) ht.style.transform = `translateY(${y * 0.16}px)`;
  if (hi) hi.style.transform = `translateY(${y * 0.09}px)`;
});

// SCROLL REVEAL
const allReveal = document.querySelectorAll('.reveal,.rl,.rr,.stagger,.scale-in,.rotate-in');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('v');
      entry.target.querySelectorAll('.rbar[data-w]').forEach((bar, i) => {
        setTimeout(() => { bar.style.width = bar.dataset.w; }, i * 160 + 200);
      });
    }
  });
}, { threshold: 0.1 });
allReveal.forEach(el => obs.observe(el));

// COUNT-UP for hero stats
setTimeout(() => {
  document.querySelectorAll('.hero-stat-num').forEach((el, i) => {
    const texts = ['$70B+', '100%', '5★'];
    el.textContent = texts[i];
  });
}, 1200);

// FLOATING PARTICLES
function spawnParticles(container, count, colors) {
  const el = document.createElement('div');
  el.className = 'particles';
  container.style.position = 'relative';
  container.appendChild(el);
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 3;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.bottom = -size + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (Math.random() * 8 + 6) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    el.appendChild(p);
  }
}
const heroSection = document.getElementById('hero');
const contactSection = document.getElementById('contact');
if (heroSection) spawnParticles(heroSection, 15, ['rgba(26,107,94,0.3)', 'rgba(192,40,62,0.25)', 'rgba(240,198,212,0.4)']);
if (contactSection) spawnParticles(contactSection, 12, ['rgba(255,255,255,0.15)', 'rgba(240,198,212,0.25)', 'rgba(255,255,255,0.08)']);

// 3D TILT on cards
document.querySelectorAll('.concept-card,.gcard,.oitem,.tcard,.shop-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// STAT COUNTER animation
const statCards = document.querySelectorAll('.stat-num');
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      entry.target.style.transition = 'transform 0.3s, color 0.3s';
      entry.target.style.transform = 'scale(1.15)';
      entry.target.style.color = 'var(--red)';
      setTimeout(() => {
        entry.target.style.transform = 'scale(1)';
        entry.target.style.color = '';
      }, 400);
    }
  });
}, { threshold: 0.5 });
statCards.forEach(el => statObs.observe(el));

// SEARCH BAR
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');
const navSearch = document.getElementById('navSearch');
const searchResults = document.getElementById('searchResults');

const searchIndex = [
  ...PRODUCTS.map(p => ({ title: p.name, desc: p.description.slice(0, 60) + '…', section: '#shop', icon: '🛍', productId: p.id })),
  { title: 'Our Concept', desc: 'Bold design, sustainable, functional', section: '#concept', icon: '💡' },
  { title: 'Gallery', desc: 'Explore the full bag collection', section: '#gallery', icon: '🖼️' },
  { title: 'Market Potential', desc: '$70B+ global market opportunity', section: '#market', icon: '📊' },
  { title: 'Revenue Streams', desc: 'E-commerce, retail, collaborations', section: '#revenue', icon: '💰' },
  { title: 'Competitive Advantage', desc: 'What sets us apart', section: '#advantage', icon: '🏆' },
  { title: 'Contact Us', desc: 'Get in touch, partner, invest', section: '#contact', icon: '📞' },
  { title: 'My Orders', desc: 'View your order history', section: 'javascript:openOrdersModal()', icon: '📦' },
];

if (searchToggle) {
  searchToggle.addEventListener('click', () => {
    navSearch.classList.toggle('open');
    if (navSearch.classList.contains('open')) {
      setTimeout(() => searchInput.focus(), 350);
    } else {
      searchInput.value = '';
      searchResults.classList.remove('visible');
      searchResults.innerHTML = '';
    }
  });
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return text.slice(0, idx) + '<mark>' + text.slice(idx, idx + query.length) + '</mark>' + text.slice(idx + query.length);
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    if (q.length < 2) {
      searchResults.classList.remove('visible');
      searchResults.innerHTML = '';
      return;
    }
    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q.toLowerCase()) ||
      item.desc.toLowerCase().includes(q.toLowerCase())
    );
    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-no-result">No results found for "' + q + '"</div>';
    } else {
      searchResults.innerHTML = matches.map(item => `
        <a class="search-result-item" href="${item.section}" ${item.productId ? `onclick="event.preventDefault();openProductModal('${item.productId}');"` : ''}>
          <div class="search-result-icon">${item.icon}</div>
          <div class="search-result-text">
            <h4>${highlightMatch(item.title, q)}</h4>
            <p>${highlightMatch(item.desc, q)}</p>
          </div>
        </a>
      `).join('');
    }
    searchResults.classList.add('visible');
  });
}

if (searchResults) {
  searchResults.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (item) {
      navSearch.classList.remove('open');
      searchInput.value = '';
      searchResults.classList.remove('visible');
      searchResults.innerHTML = '';
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navSearch && navSearch.classList.contains('open')) {
    navSearch.classList.remove('open');
    searchInput.value = '';
    searchResults.classList.remove('visible');
    searchResults.innerHTML = '';
  }
});

document.addEventListener('click', (e) => {
  if (navSearch && !navSearch.contains(e.target) && navSearch.classList.contains('open')) {
    navSearch.classList.remove('open');
    searchInput.value = '';
    searchResults.classList.remove('visible');
    searchResults.innerHTML = '';
  }
});

// End of App logic

/* ═══════════════════════════════════════════════════════════════
   ✦ WOW ANIMATION ENGINE — Liceria & Co.
   Luxury-grade interaction system
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ── 1. NATIVE CURSOR RESTORED ── */
  // Custom cursor logic removed for maximum smoothness and native behavior.

  /* ── 2. SCROLL PROGRESS ── */
  const prog = document.createElement('div'); prog.id = 'scroll-progress'; document.body.prepend(prog);
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (window.scrollY / max * 100).toFixed(2) + '%';
  }, { passive: true });

  /* ── 3. SCROLL-TO-TOP ── */
  const topBtn = document.createElement('button');
  topBtn.id = 'scrollTop'; topBtn.setAttribute('aria-label', 'Scroll to top');
  topBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  document.body.appendChild(topBtn);
  window.addEventListener('scroll', () => topBtn.classList.toggle('visible', window.scrollY > 500), { passive: true });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── 4. NAV COMPACT on scroll ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('nav-compact', window.scrollY > 60);
  }, { passive: true });

  /* ── 5. NAV LOGO click → top ── */
  const logo = document.querySelector('.nav-logo');
  if (logo) logo.style.cursor = 'pointer', logo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── 6. ADD data-text to nav links for colour overlay ── */
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.setAttribute('data-text', a.textContent);
  });

  /* ── 7. CINEMATIC LOADER ── */
  // Rebuild loader for split-panel effect
  const loader = document.getElementById('loader');
  if (loader) {
    const origContent = loader.innerHTML;
    loader.style.cssText = 'position:fixed;inset:0;z-index:100000;display:grid;grid-template-rows:1fr 1fr;overflow:hidden;';
    loader.innerHTML = `
      <div class="loader-panel top"></div>
      <div class="loader-panel bottom"></div>
      <div class="loader-content" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;pointer-events:none;">
        <div class="loader-logo">Liceria & Co.</div>
        <div class="loader-sub">Bags for the Bold</div>
        <div class="loader-bar-bg"><div class="loader-bar"></div></div>
        <div class="loader-pct" id="loaderPct">0</div>
      </div>`;

    // Count up loader percentage
    let pct = 0;
    const pctEl = document.getElementById('loaderPct');
    const pctInterval = setInterval(() => {
      pct = Math.min(pct + Math.floor(Math.random() * 12) + 3, 100);
      if (pctEl) pctEl.textContent = pct;
      if (pct >= 100) clearInterval(pctInterval);
    }, 80);
  }

  /* ── 8. INTERSECTION OBSERVER (super smooth) ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('v');
        // Animate revenue bars
        entry.target.querySelectorAll('.rbar[data-w]').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.w; }, i * 180 + 300);
        });
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal,.rl,.rr,.stagger,.scale-in,.rotate-in').forEach(el => revealObs.observe(el));

  /* ── 9. STAT NUMBER COUNT-UP ── */
  const statObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target._counted) return;
      entry.target._counted = true;
      const original = entry.target.textContent;
      const num = parseFloat(original.replace(/[^0-9.]/g, ''));
      if (isNaN(num) || num === 0) return;
      const start = performance.now();
      const dur = 1200;
      const prefix = original.match(/^[^0-9]*/)[0];
      const suffix = original.match(/[^0-9]*$/)[0];
      const int = !original.includes('.');

      (function tick(now) {
        const t = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 4);
        const val = num * ease;
        entry.target.textContent = prefix + (int ? Math.round(val) : val.toFixed(1)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
        else entry.target.textContent = original;
      })(start);
    });
  }, { threshold: 0.7 });
  document.querySelectorAll('.stat-num, .hero-stat-num').forEach(el => statObs.observe(el));

  /* ── 10. 3D TILT ── */
  const tiltEls = '.concept-card,.shop-card,.stat-card,.tcard,.gcard,.oitem';
  document.querySelectorAll(tiltEls).forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('tilt-active'));
    card.addEventListener('mouseleave', () => {
      card.classList.remove('tilt-active');
      card.style.transform = '';
    });
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 16;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * -16;
      card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-12px) scale(1.03)`;
    });
  });

  /* ── 11. MAGNETIC BUTTONS ── */
  document.querySelectorAll('.btn-primary,.btn-outline,.shop-add-btn,.nav-cta,.nav-login-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) * 0.25;
      const dy = (e.clientY - (r.top  + r.height / 2)) * 0.25;
      btn.style.transform = `translate(${dx}px,${dy}px) scale(1.06)`;
      btn.style.transition = 'transform 0.1s';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    });
  });

  /* ── 12. RIPPLE on click ── */
  const rippleStyle = document.createElement('style');
  rippleStyle.textContent = `
    @keyframes _ripple { to { transform: translate(-50%,-50%) scale(4); opacity:0; } }
    ._rip { position:absolute; border-radius:50%; pointer-events:none;
            width:40px; height:40px; background:rgba(255,255,255,0.35);
            transform:translate(-50%,-50%) scale(0);
            animation:_ripple 0.7s ease-out forwards; }
  `;
  document.head.appendChild(rippleStyle);

  document.querySelectorAll('.btn-primary,.btn-outline,.shop-add-btn,.auth-submit,.pm-add-btn,.cart-checkout-btn,.nav-login-btn').forEach(btn => {
    if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const rip = document.createElement('span'); rip.className = '_rip';
      rip.style.left = (e.clientX - r.left) + 'px';
      rip.style.top  = (e.clientY - r.top)  + 'px';
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 750);
    });
  });

  /* ── 13. GALLERY MOUSE SPOTLIGHT ── */
  document.querySelectorAll('.gitem').forEach(item => {
    item.addEventListener('mousemove', e => {
      const r = item.getBoundingClientRect();
      item.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      item.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });

  /* ── 14. CONCEPT CARD SPOTLIGHT ── */
  document.querySelectorAll('.concept-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%');
    });
  });

  /* ── 15. GALLERY DRAG SCROLL ── */
  const track = document.querySelector('.gallery-track');
  if (track) {
    let isDown = false, startX, scrollLeft, vel = 0, lastX, raf;
    track.addEventListener('mousedown', e => {
      isDown = true; startX = e.pageX; lastX = e.pageX;
      track.style.animationPlayState = 'paused'; track.style.cursor = 'grabbing'; vel = 0;
      cancelAnimationFrame(raf);
    });
    document.addEventListener('mouseup', () => {
      if (!isDown) return; isDown = false; track.style.cursor = 'grab';
      // Momentum
      (function momentum() {
        if (Math.abs(vel) < 0.5) { track.style.animationPlayState = 'running'; return; }
        track.scrollLeft -= vel; vel *= 0.93; raf = requestAnimationFrame(momentum);
      })();
    });
    track.addEventListener('mousemove', e => {
      if (!isDown) return; e.preventDefault();
      vel = lastX - e.pageX; lastX = e.pageX;
      track.scrollLeft += vel;
    });
    track.addEventListener('mouseleave', () => { if (!isDown) return; });
  }

  /* ── 16. FLOATING PARTICLES (hero + contact) ── */
  function spawnParticles(section, count) {
    if (!section) return;
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:1;';
    section.style.position = 'relative';
    section.prepend(wrap);
    const colors = ['rgba(26,107,94,0.35)','rgba(192,40,62,0.28)','rgba(240,198,212,0.4)','rgba(255,255,255,0.12)'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 8 + 3;
      const dur  = (Math.random() * 10 + 8) + 's';
      const delay = (Math.random() * 10) + 's';
      const dx   = (Math.random() - 0.5) * 120 + 'px';
      p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;bottom:${Math.random()*20}%;background:${colors[i%colors.length]};--dur:${dur};--delay:${delay};--dx:${dx};border-radius:50%;`;
      wrap.appendChild(p);
    }
  }
  spawnParticles(document.getElementById('hero'), 20);
  spawnParticles(document.getElementById('contact'), 14);

  /* ── 17. TICKER HOVER PAUSE ── */
  const tickerTrack = document.querySelector('.ticker-track');
  const ticker = document.querySelector('.ticker');
  if (ticker && tickerTrack) {
    ticker.addEventListener('mouseenter', () => tickerTrack.style.animationPlayState = 'paused');
    ticker.addEventListener('mouseleave', () => tickerTrack.style.animationPlayState = 'running');
  }

  /* ── 18. PARALLAX SCROLL (hero + sections) ── */
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const ht = document.querySelector('.hero-text');
    const hi = document.querySelector('.hero-image-area');
    if (ht) ht.style.transform = `translateY(${y * 0.14}px)`;
    if (hi) hi.style.transform = `translateY(${y * 0.08}px)`;

    // Section image parallax
    ['.challenge-imgs', '.market-imgs', '.adv-imgs'].forEach((sel, i) => {
      const el = document.querySelector(sel);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const factor = [0.07, 0.05, 0.06][i];
      el.style.transform = `translateY(${(r.top + r.height/2 - center) * factor}px)`;
    });
  }, { passive: true });

  /* ── 19. SECTION TITLE — word reveal on scroll ── */
  document.querySelectorAll('.section-title').forEach(title => {
    const words = title.innerHTML.split(/(<[^>]+>|\s+)/).filter(Boolean);
    // Only do simple ones without nested HTML
    if (title.querySelector('em,strong,a')) return;
    title.innerHTML = title.textContent.split(' ').map((w, i) =>
      `<span style="display:inline-block;overflow:hidden;"><span class="_word" style="display:inline-block;transform:translateY(110%);opacity:0;transition:transform 0.7s ${0.05 * i + 0.1}s cubic-bezier(0.19,1,0.22,1),opacity 0.6s ${0.05*i+0.1}s ease;">${w}</span></span>${i < title.textContent.split(' ').length - 1 ? ' ' : ''}`
    ).join('');
  });

  const titleObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('._word').forEach(w => {
        w.style.transform = 'translateY(0)';
        w.style.opacity = '1';
      });
      titleObs.unobserve(entry.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.section-title').forEach(t => titleObs.observe(t));

  /* ── 20. PARTICLE BURST on shop card add ── */
  document.querySelectorAll('.shop-add-btn,.pm-add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const r = btn.getBoundingClientRect();
      const cx2 = r.left + r.width / 2;
      const cy2 = r.top  + r.height / 2;
      for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        const angle = (i / 12) * Math.PI * 2;
        const dist  = 50 + Math.random() * 40;
        const size  = Math.random() * 8 + 4;
        p.style.cssText = `
          position:fixed; width:${size}px; height:${size}px; border-radius:50%;
          background:${Math.random() > 0.5 ? 'var(--teal)' : 'var(--red)'};
          left:${cx2}px; top:${cy2}px; pointer-events:none; z-index:99999;
          transform:translate(-50%,-50%);
          transition: transform 0.6s cubic-bezier(0.19,1,0.22,1), opacity 0.6s ease;
        `;
        document.body.appendChild(p);
        requestAnimationFrame(() => {
          p.style.transform = `translate(calc(-50% + ${Math.cos(angle)*dist}px), calc(-50% + ${Math.sin(angle)*dist}px)) scale(0)`;
          p.style.opacity = '0';
        });
        setTimeout(() => p.remove(), 700);
      }
    });
  });

  /* ── 21. STAGGER reveal for ritem/aitem ── */
  const extraObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target._seen) return;
      entry.target._seen = true;
      const items = entry.target.querySelectorAll('.ritem, .aitem, .order-card');
      items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        setTimeout(() => {
          item.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.19,1,0.22,1)';
          item.style.opacity = '1';
          item.style.transform = '';
        }, i * 90 + 100);
      });
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('#revenue, #advantage, #myOrders').forEach(s => extraObs.observe(s));

  /* ── 22. NAV SHADOW on scroll ── */
  window.addEventListener('scroll', () => {
    if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 4px 32px rgba(0,0,0,0.08)' : 'none';
  }, { passive: true });

  /* ── 23. IMAGE lazy reveal with scale ── */
  const imgObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      img.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.19,1,0.22,1)';
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
      imgObs.unobserve(img);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.cimg img, .mimg-main img, .mimg-secondary img, .aimg img, .oitem-img img').forEach(img => {
    img.style.opacity = '0';
    img.style.transform = 'scale(1.06)';
    imgObs.observe(img);
  });

  console.log('✦ Liceria & Co. — WOW animation engine loaded');
})();
