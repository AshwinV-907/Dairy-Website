// Daily Household Milk & Dairy Subscription Calculator

const SubscriptionCalc = {
  state: {
    members: 4,
    milkType: 'a2-hallikar', // 'a2-hallikar' (88), 'malnad-gidda' (110), 'filter-coffee' (76)
    litersPerDay: 2,
    frequency: 'daily', // 'daily' (30 days), 'alternate' (15 days), 'weekdays' (22 days)
    includeCurd: true,
    includeGhee: true,
    includePaneer: false
  },

  milkRates: {
    'a2-hallikar': { name: 'A2 Hallikar Cow Milk', price: 88 },
    'malnad-gidda': { name: 'Malnad Gidda Herbal Milk', price: 110 },
    'filter-coffee': { name: 'Filter Coffee Whole Milk', price: 76 }
  },

  addonRates: {
    curd: { name: 'Clay Pot Curd (1kg weekly)', price: 95 * 4 }, // 4 vats / month
    ghee: { name: 'Bilona Ghee (500ml monthly)', price: 740 },
    paneer: { name: 'Malai Paneer (500g weekly)', price: 240 * 4 } // 4 packs / month
  },

  init() {
    this.bindEvents();
    this.calculate();
  },

  bindEvents() {
    // Family Member Buttons
    document.querySelectorAll('.btn-calc-family').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-calc-family').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const members = parseInt(btn.dataset.members);
        this.state.members = members;
        // Default recommended liters based on members
        this.state.litersPerDay = Math.max(1, Math.round(members * 0.5));
        this.updateLitersDisplay();
        this.calculate();
      });
    });

    // Milk Type Selection
    document.querySelectorAll('.btn-calc-milk').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-calc-milk').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.milkType = btn.dataset.milk;
        this.calculate();
      });
    });

    // Frequency Selection
    document.querySelectorAll('.btn-calc-freq').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-calc-freq').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.state.frequency = btn.dataset.freq;
        this.calculate();
      });
    });

    // Liters buttons
    const literMinus = document.getElementById('calc-liter-minus');
    const literPlus = document.getElementById('calc-liter-plus');
    if (literMinus && literPlus) {
      literMinus.addEventListener('click', () => {
        if (this.state.litersPerDay > 1) {
          this.state.litersPerDay -= 0.5;
          this.updateLitersDisplay();
          this.calculate();
        }
      });
      literPlus.addEventListener('click', () => {
        if (this.state.litersPerDay < 10) {
          this.state.litersPerDay += 0.5;
          this.updateLitersDisplay();
          this.calculate();
        }
      });
    }

    // Addon Checkboxes
    const chkCurd = document.getElementById('calc-addon-curd');
    const chkGhee = document.getElementById('calc-addon-ghee');
    const chkPaneer = document.getElementById('calc-addon-paneer');

    if (chkCurd) {
      chkCurd.addEventListener('change', (e) => {
        this.state.includeCurd = e.target.checked;
        this.calculate();
      });
    }
    if (chkGhee) {
      chkGhee.addEventListener('change', (e) => {
        this.state.includeGhee = e.target.checked;
        this.calculate();
      });
    }
    if (chkPaneer) {
      chkPaneer.addEventListener('change', (e) => {
        this.state.includePaneer = e.target.checked;
        this.calculate();
      });
    }

    // Subscribe Button Click
    const btnSubscribe = document.getElementById('btn-subscribe-calculated');
    if (btnSubscribe) {
      btnSubscribe.addEventListener('click', () => {
        this.addCalculatedPlanToCart();
      });
    }
  },

  updateLitersDisplay() {
    const el = document.getElementById('calc-liters-val');
    if (el) {
      el.textContent = `${this.state.litersPerDay} L / day`;
    }
  },

  calculate() {
    let daysInMonth = 30;
    let freqLabel = 'Everyday (30 Deliveries)';
    if (this.state.frequency === 'alternate') {
      daysInMonth = 15;
      freqLabel = 'Alternate Days (15 Deliveries)';
    } else if (this.state.frequency === 'weekdays') {
      daysInMonth = 22;
      freqLabel = 'Weekdays (22 Deliveries)';
    }

    const milk = this.milkRates[this.state.milkType];
    const totalMilkLiters = this.state.litersPerDay * daysInMonth;
    const milkCost = totalMilkLiters * milk.price;

    let addonCost = 0;
    const activeAddons = [];

    if (this.state.includeCurd) {
      addonCost += this.addonRates.curd.price;
      activeAddons.push('Clay Pot Curd (4kg/mo)');
    }
    if (this.state.includeGhee) {
      addonCost += this.addonRates.ghee.price;
      activeAddons.push('Bilona Desi Ghee (500ml/mo)');
    }
    if (this.state.includePaneer) {
      addonCost += this.addonRates.paneer.price;
      activeAddons.push('Malai Paneer (2kg/mo)');
    }

    const grandTotal = milkCost + addonCost;

    // Update DOM summary
    const summaryMilkName = document.getElementById('sum-milk-name');
    const summaryMilkQty = document.getElementById('sum-milk-qty');
    const summaryMilkCost = document.getElementById('sum-milk-cost');
    const summaryAddons = document.getElementById('sum-addons-list');
    const summaryGrandTotal = document.getElementById('sum-grand-total');

    if (summaryMilkName) summaryMilkName.textContent = milk.name;
    if (summaryMilkQty) summaryMilkQty.textContent = `${totalMilkLiters} Litres (${freqLabel})`;
    if (summaryMilkCost) summaryMilkCost.textContent = `₹${milkCost.toLocaleString('en-IN')}`;

    if (summaryAddons) {
      if (activeAddons.length > 0) {
        summaryAddons.innerHTML = activeAddons.map(a => `<div>+ ${a}</div>`).join('');
      } else {
        summaryAddons.innerHTML = '<span style="color:var(--color-muted)">None selected</span>';
      }
    }

    if (summaryGrandTotal) {
      summaryGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
    }

    this.currentCalculation = {
      milkName: milk.name,
      litersPerDay: this.state.litersPerDay,
      frequency: freqLabel,
      totalLiters: totalMilkLiters,
      milkCost: milkCost,
      addons: activeAddons,
      addonCost: addonCost,
      grandTotal: grandTotal
    };
  },

  addCalculatedPlanToCart() {
    if (!this.currentCalculation) return;
    const planItem = {
      id: `subscription-plan-${Date.now()}`,
      name: `Monthly Plan: ${this.currentCalculation.milkName}`,
      price: this.currentCalculation.grandTotal,
      quantity: 1,
      unit: `${this.currentCalculation.litersPerDay}L Daily (${this.currentCalculation.totalLiters}L/mo)`,
      details: this.currentCalculation.addons.length ? this.currentCalculation.addons.join(', ') : 'Milk Only'
    };

    CartManager.addItem(planItem);
    showToast(`Added custom monthly plan (₹${this.currentCalculation.grandTotal}) to morning basket.`);
    CartManager.openDrawer();
  }
};
