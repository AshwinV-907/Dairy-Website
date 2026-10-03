// Cart Management System for Kaveri Artisanal Dairy

const CartManager = {
  items: [],

  init() {
    this.loadFromStorage();
    this.bindEvents();
    this.render();
  },

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('kaveri_dairy_cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage not available, using memory store');
      this.items = [];
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem('kaveri_dairy_cart', JSON.stringify(this.items));
    } catch (e) {
      // ignore
    }
  },

  bindEvents() {
    // Open Cart Drawer
    const cartToggle = document.getElementById('cart-toggle-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('btn-close-cart');

    if (cartToggle) {
      cartToggle.addEventListener('click', () => this.openDrawer());
    }
    if (closeCartBtn) {
      closeCartBtn.addEventListener('click', () => this.closeDrawer());
    }
    if (cartOverlay) {
      cartOverlay.addEventListener('click', () => this.closeDrawer());
    }

    // Checkout Button
    const btnCheckout = document.getElementById('btn-proceed-checkout');
    if (btnCheckout) {
      btnCheckout.addEventListener('click', () => {
        if (this.items.length === 0) {
          showToast('Your morning basket is empty. Please add items to order.');
          return;
        }
        this.closeDrawer();
        this.openCheckoutModal();
      });
    }

    // Modal Close
    const btnCloseModal = document.getElementById('btn-close-modal');
    const modalOverlay = document.getElementById('checkout-modal-overlay');
    if (btnCloseModal) {
      btnCloseModal.addEventListener('click', () => this.closeCheckoutModal());
    }
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) this.closeCheckoutModal();
      });
    }

    // Checkout Form Submit
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.completeOrder();
      });
    }
  },

  openDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
  },

  closeDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
  },

  openCheckoutModal() {
    const modal = document.getElementById('checkout-modal-overlay');
    if (modal) {
      modal.classList.add('open');
      const totalAmountEl = document.getElementById('modal-total-amt');
      if (totalAmountEl) {
        totalAmountEl.textContent = `₹${this.getTotal().toLocaleString('en-IN')}`;
      }
    }
  },

  closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal-overlay');
    if (modal) modal.classList.remove('open');
  },

  addItem(product) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += product.quantity || 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit || '',
        quantity: product.quantity || 1,
        details: product.details || ''
      });
    }
    this.saveToStorage();
    this.render();
  },

  removeItem(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.saveToStorage();
    this.render();
  },

  updateQty(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeItem(id);
    } else {
      this.saveToStorage();
      this.render();
    }
  },

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  render() {
    // Update badge counter
    const badge = document.getElementById('cart-count-badge');
    if (badge) {
      badge.textContent = this.getItemCount();
    }

    // Render Cart Drawer Items
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-subtotal-val');

    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = `
        <div class="cart-empty-state">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--color-gold);">❖</div>
          <h4 style="color: var(--color-primary-dark); margin-bottom: 0.4rem;">Morning Basket is Empty</h4>
          <p style="font-size: 0.9rem; color: var(--color-stone);">Choose farm-fresh A2 milk, cultured Bilona ghee, or filter coffee special milk from our catalog.</p>
        </div>
      `;
      if (totalEl) totalEl.textContent = '₹0';
      return;
    }

    container.innerHTML = this.items.map(item => `
      <div class="cart-item-card">
        <div class="cart-item-info">
          <h5>${item.name}</h5>
          <span>${item.unit} ${item.details ? '• ' + item.details : ''}</span>
          <div style="font-weight: 700; color: var(--color-gold-deep); margin-top: 4px;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="CartManager.updateQty('${item.id}', -1)">-</button>
          <span class="qty-value">${item.quantity}</span>
          <button class="qty-btn" onclick="CartManager.updateQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');

    if (totalEl) {
      totalEl.textContent = `₹${this.getTotal().toLocaleString('en-IN')}`;
    }
  },

  completeOrder() {
    const customerName = document.getElementById('order-name').value;
    const district = document.getElementById('order-district').value;
    const total = this.getTotal();

    this.closeCheckoutModal();
    this.items = [];
    this.saveToStorage();
    this.render();

    showToast(`Dhanyavadagalu (Thank you), ${customerName}! Order for ₹${total.toLocaleString('en-IN')} confirmed. Delivery to ${district} scheduled for 5:45 AM.`);
  }
};
