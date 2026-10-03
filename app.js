// Main Application Controller for Kaveri Artisanal Dairy

let currentLanguage = 'en';

// Toast Notification Helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<strong>❖ Kaveri Dairy:</strong> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

// Product SVG Icon Generator (Strict Non-Circular Geometric Styling)
function getProductSVG(iconType) {
  switch (iconType) {
    case 'milk-bottle':
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Glass Milk Bottle with Golden Cap -->
          <rect x="50" y="10" width="20" height="10" fill="#C59838" stroke="#0F2318" stroke-width="2"/>
          <rect x="46" y="20" width="28" height="8" fill="#E8DDC9" stroke="#0F2318" stroke-width="2"/>
          <polygon points="46,28 74,28 84,46 36,46" fill="#FAF7F0" stroke="#0F2318" stroke-width="2"/>
          <rect x="36" y="46" width="48" height="60" fill="#FFFFFF" stroke="#0F2318" stroke-width="2"/>
          <!-- Milk Level Indicator -->
          <rect x="40" y="52" width="40" height="50" fill="#FAF7F0"/>
          <!-- Heritage Label -->
          <rect x="42" y="62" width="36" height="26" fill="#183B2B" stroke="#C59838" stroke-width="1.5"/>
          <rect x="47" y="68" width="26" height="4" fill="#E2BA5F"/>
          <rect x="52" y="76" width="16" height="6" fill="#C59838"/>
        </svg>
      `;
    case 'ghee-pot':
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Authentic Glass/Brass Vedic Ghee Jar with Golden Ghee -->
          <!-- Jar Lid & Golden Finial -->
          <rect x="52" y="12" width="16" height="6" fill="#C59838" stroke="#0F2318" stroke-width="1.5"/>
          <rect x="40" y="18" width="40" height="10" fill="#0F2318" stroke="#C59838" stroke-width="2"/>
          <rect x="36" y="28" width="48" height="8" fill="#D5C8AF" stroke="#0F2318" stroke-width="2"/>
          <!-- Glass Jar Body -->
          <rect x="30" y="36" width="60" height="68" fill="#FCFAF6" stroke="#0F2318" stroke-width="2"/>
          <!-- Golden Granular Ghee Layer inside Jar -->
          <rect x="34" y="46" width="52" height="54" fill="#E2BA5F"/>
          <!-- Rich Deep Golden Bottom Ghee Layer -->
          <rect x="34" y="68" width="52" height="32" fill="#C59838"/>
          <!-- Granular Ghee Texture Specks -->
          <rect x="40" y="52" width="4" height="4" fill="#F6E7C4"/>
          <rect x="58" y="56" width="5" height="4" fill="#FAF7F0"/>
          <rect x="72" y="50" width="4" height="4" fill="#F6E7C4"/>
          <rect x="46" y="74" width="6" height="4" fill="#FAF7F0"/>
          <rect x="64" y="78" width="5" height="5" fill="#FAF7F0"/>
          <rect x="52" y="86" width="4" height="4" fill="#F6E7C4"/>
          <!-- Front Heritage Label -->
          <rect x="42" y="62" width="36" height="22" fill="#183B2B" stroke="#E2BA5F" stroke-width="1.5"/>
          <rect x="46" y="68" width="28" height="4" fill="#E2BA5F"/>
          <rect x="50" y="75" width="20" height="4" fill="#FAF7F0"/>
          <!-- Wooden Dipper / Churn Spoon Angle -->
          <polygon points="76,14 82,16 66,54 60,52" fill="#9E7422" stroke="#0F2318" stroke-width="1.5"/>
        </svg>
      `;
    case 'paneer-block':
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Wooden/Slate Base Board -->
          <rect x="18" y="88" width="84" height="14" fill="#2F3E34" stroke="#0F2318" stroke-width="2"/>
          <rect x="22" y="90" width="76" height="4" fill="#48544C"/>
          
          <!-- Base Large Malai Paneer Block (Isometric Square Box) -->
          <polygon points="35,42 75,42 88,54 48,54" fill="#FFFFFF" stroke="#0F2318" stroke-width="2"/>
          <polygon points="35,42 48,54 48,86 35,74" fill="#EAE3D2" stroke="#0F2318" stroke-width="2"/>
          <polygon points="48,54 88,54 88,86 48,86" fill="#F5EFE4" stroke="#0F2318" stroke-width="2"/>
          
          <!-- Fresh Cut Grid Texture lines on Paneer -->
          <line x1="68" y1="54" x2="68" y2="86" stroke="#D5C8AF" stroke-width="1.5"/>
          <line x1="48" y1="70" x2="88" y2="70" stroke="#D5C8AF" stroke-width="1.5"/>

          <!-- Top Stacked Diced Paneer Cubes -->
          <!-- Cube 1 -->
          <polygon points="52,24 72,24 80,32 60,32" fill="#FFFFFF" stroke="#0F2318" stroke-width="1.5"/>
          <polygon points="52,24 60,32 60,48 52,40" fill="#E8DDC9" stroke="#0F2318" stroke-width="1.5"/>
          <polygon points="60,32 80,32 80,48 60,48" fill="#F5EFE4" stroke="#0F2318" stroke-width="1.5"/>
          
          <!-- Mint / Coriander Leaf Accent (Sharp angular leaf) -->
          <polygon points="76,20 86,16 84,26 76,24" fill="#1E6B42" stroke="#0F2318" stroke-width="1"/>
          <polygon points="62,18 72,12 70,22 62,20" fill="#24523D" stroke="#0F2318" stroke-width="1"/>
        </svg>
      `;
    case 'coffee-milk':
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Traditional Brass Davarah & Tumbler Geometric Cut -->
          <!-- Davarah (Bottom Bowl) -->
          <polygon points="26,72 94,72 84,98 36,98" fill="#C59838" stroke="#0F2318" stroke-width="2"/>
          <rect x="34" y="80" width="52" height="4" fill="#E2BA5F"/>
          <!-- Tumbler (Glass/Cup) -->
          <polygon points="40,30 80,30 74,70 46,70" fill="#E2BA5F" stroke="#0F2318" stroke-width="2"/>
          <!-- Frothy White Coffee Milk Cream Top -->
          <rect x="42" y="32" width="36" height="8" fill="#FCFAF6" stroke="#0F2318" stroke-width="1.5"/>
          <!-- Tumbler Grip Band -->
          <rect x="44" y="48" width="32" height="12" fill="#0F2318"/>
          <rect x="48" y="52" width="24" height="4" fill="#C59838"/>
        </svg>
      `;
    case 'curd-vat':
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Traditional Clay Pot (Matka) with Thick White Curd -->
          <rect x="46" y="22" width="28" height="8" fill="#8C7D6B" stroke="#0F2318" stroke-width="2"/>
          <polygon points="34,30 86,30 96,60 24,60" fill="#A89078" stroke="#0F2318" stroke-width="2"/>
          <rect x="24" y="60" width="72" height="38" fill="#8C7D6B" stroke="#0F2318" stroke-width="2"/>
          <!-- Visible Thick White Curd & Malai top -->
          <polygon points="40,30 80,30 84,40 36,40" fill="#FCFAF6" stroke="#0F2318" stroke-width="1.5"/>
          <!-- Terracotta Geometric Band -->
          <rect x="30" y="66" width="60" height="12" fill="#0F2318"/>
          <polygon points="42,72 48,68 54,72 48,76" fill="#C59838"/>
          <polygon points="66,72 72,68 78,72 72,76" fill="#C59838"/>
        </svg>
      `;
    case 'butter-block':
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Hand-Churned Butter Slab (Benne) on Banana Leaf -->
          <polygon points="16,80 104,80 94,94 26,94" fill="#1E6B42" stroke="#0F2318" stroke-width="2"/>
          <!-- Butter Slab -->
          <polygon points="30,42 74,30 92,44 48,56" fill="#FCFAF6" stroke="#0F2318" stroke-width="2"/>
          <polygon points="30,42 48,56 48,78 30,64" fill="#F3EFE6" stroke="#0F2318" stroke-width="2"/>
          <polygon points="48,56 92,44 92,66 48,78" fill="#EAE3D2" stroke="#0F2318" stroke-width="2"/>
          <rect x="52" y="48" width="24" height="6" fill="#C59838" opacity="0.6"/>
        </svg>
      `;
    case 'sweet-tin':
    default:
      return `
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Royal Mysore Pak Box with Golden Cubes -->
          <polygon points="60,18 96,36 60,54 24,36" fill="#C59838" stroke="#0F2318" stroke-width="2"/>
          <polygon points="24,36 60,54 60,88 24,70" fill="#183B2B" stroke="#0F2318" stroke-width="2"/>
          <polygon points="96,36 60,54 60,88 96,70" fill="#0F2318" stroke="#C59838" stroke-width="2"/>
          <!-- Saffron thread details -->
          <line x1="50" y1="32" x2="65" y2="40" stroke="#E2BA5F" stroke-width="2"/>
          <line x1="68" y1="28" x2="58" y2="44" stroke="#9E7422" stroke-width="2"/>
        </svg>
      `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Modules
  renderProductCatalog('all');
  SubscriptionCalc.init();
  CartManager.init();
  initBatchVerification();
  initLanguageToggle();
  initMobileMenu();

  // Filter tabs
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      renderProductCatalog(category);
    });
  });
});

// Render Product Catalog
function renderProductCatalog(filterCategory = 'all') {
  const container = document.getElementById('products-grid-container');
  if (!container) return;

  const filtered = filterCategory === 'all'
    ? DAIRY_DATA.products
    : DAIRY_DATA.products.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(product => `
    <div class="product-card" data-category="${product.category}">
      <div class="product-card-top">
        <span class="product-badge-flag">${product.badge}</span>
        ${getProductSVG(product.iconType)}
        <span class="product-origin-tag">📍 ${product.origin}</span>
      </div>
      <div class="product-body">
        <div class="product-kannada-name">${product.kannadaName}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        
        <div class="product-specs">
          <div class="spec-item">
            <span class="spec-label">Natural Fat</span>
            <span class="spec-value">${product.fat}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">${product.snf ? 'SNF Solids' : product.protein ? 'Protein' : 'Purity Grade'}</span>
            <span class="spec-value">${product.snf || product.protein || 'A2 Certified'}</span>
          </div>
        </div>

        <div class="product-footer">
          <div class="product-price-wrap">
            <span class="product-price">₹${product.price}</span>
            <span class="product-unit">${product.unit}</span>
          </div>
          <button class="btn-add-cart" onclick="addProductToCart('${product.id}')">
            <span>+ Add To Basket</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function addProductToCart(productId) {
  const product = DAIRY_DATA.products.find(p => p.id === productId);
  if (!product) return;

  CartManager.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    unit: product.unit,
    quantity: 1
  });

  showToast(`Added ${product.name} (₹${product.price}) to morning basket.`);
}

// Batch Verification Purity Inspector
function initBatchVerification() {
  const input = document.getElementById('batch-search-input');
  const btn = document.getElementById('btn-verify-batch');
  const quickChips = document.querySelectorAll('.quick-batch-chip');

  function performLookup(batchCode) {
    const code = (batchCode || '').trim().toUpperCase();
    const data = DAIRY_DATA.labBatches[code] || DAIRY_DATA.labBatches['KV-2026-081'];

    // Update fields
    const batchIdEl = document.getElementById('purity-display-batch');
    const dateEl = document.getElementById('purity-display-date');
    const farmEl = document.getElementById('purity-display-farm');
    const fatEl = document.getElementById('purity-val-fat');
    const snfEl = document.getElementById('purity-val-snf');
    const a2El = document.getElementById('purity-val-a2');
    const tempEl = document.getElementById('purity-val-temp');

    if (batchIdEl) batchIdEl.textContent = `Batch #${code}`;
    if (dateEl) dateEl.textContent = data.date;
    if (farmEl) farmEl.textContent = `Sourced: ${data.farm} (${data.breed})`;
    if (fatEl) fatEl.textContent = data.fat;
    if (snfEl) snfEl.textContent = data.snf;
    if (a2El) a2El.textContent = data.a2BetaCasein;
    if (tempEl) tempEl.textContent = data.chillingTemp;

    showToast(`Loaded purity analysis for ${code} (${data.farm})`);
  }

  if (btn && input) {
    btn.addEventListener('click', () => {
      performLookup(input.value || 'KV-2026-081');
    });
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performLookup(input.value || 'KV-2026-081');
      }
    });
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.dataset.batch;
      if (input) input.value = code;
      performLookup(code);
    });
  });
}

// Language Switcher (EN / KN)
function initLanguageToggle() {
  const btn = document.getElementById('lang-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (currentLanguage === 'en') {
      currentLanguage = 'kn';
      btn.innerHTML = '🌐 EN | <strong>ಕನ್ನಡ</strong>';
      applyKannadaTranslations();
      showToast('ಕನ್ನಡ ಭಾಷೆಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ (Switched to Kannada)');
    } else {
      currentLanguage = 'en';
      btn.innerHTML = '🌐 <strong>EN</strong> | ಕನ್ನಡ';
      applyEnglishTranslations();
      showToast('Switched to English');
    }
  });
}

function applyKannadaTranslations() {
  document.querySelectorAll('[data-kn]').forEach(el => {
    el.dataset.origText = el.textContent;
    el.textContent = el.dataset.kn;
  });
}

function applyEnglishTranslations() {
  document.querySelectorAll('[data-kn]').forEach(el => {
    if (el.dataset.origText) {
      el.textContent = el.dataset.origText;
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav-menu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
      });
    });
  }
}
