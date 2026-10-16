// Prompt Paws: The Cozy AI Agent Cafe & Bakery — 60 FPS Kawaii Simulation Engine
(() => {
  const canvas = document.getElementById('cafe-canvas');
  const ctx = canvas.getContext('2d');

  // UI Elements
  const hudCoins = document.getElementById('hud-coins');
  const hudServed = document.getElementById('hud-served');
  const hudHearts = document.getElementById('hud-hearts');
  const hudSavings = document.getElementById('hud-savings');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const btnSpeed = document.getElementById('btn-speed');
  const btnBlueprint = document.getElementById('btn-blueprint');
  const btnReset = document.getElementById('btn-reset');
  const btnAudio = document.getElementById('btn-audio');
  const levelSelect = document.getElementById('level-select');
  const levelBadge = document.getElementById('level-number-badge');
  const levelStory = document.getElementById('level-story');
  const orderForecast = document.getElementById('order-forecast');
  const stationPalette = document.getElementById('station-palette');
  const coachBubble = document.getElementById('coach-bubble');
  const linterAlerts = document.getElementById('linter-alerts');

  const metricHallucination = document.getElementById('metric-hallucination');
  const metricBlocked = document.getElementById('metric-blocked');
  const metricRag = document.getElementById('metric-rag');
  const metricChefs = document.getElementById('metric-chefs');

  // Inspector Elements
  const inspector = document.getElementById('station-inspector');
  const inspTitle = document.getElementById('insp-title');
  const inspDesc = document.getElementById('insp-desc');
  const inspMetrics = document.getElementById('insp-metrics');
  const btnUpgradeStation = document.getElementById('btn-upgrade-station');
  const btnSellStation = document.getElementById('btn-sell-station');
  const inspClose = document.getElementById('insp-close');

  // Modal Elements
  const shiftModal = document.getElementById('shift-modal');
  const modalEmoji = document.getElementById('modal-emoji');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalLesson = document.getElementById('modal-lesson');
  const modalStats = document.getElementById('modal-stats');
  const btnModalNext = document.getElementById('btn-modal-next');
  const btnModalRetry = document.getElementById('btn-modal-retry');

  // Tutorial Modal Elements
  const btnHowTo = document.getElementById('btn-howto');
  const tutorialModal = document.getElementById('tutorial-modal');
  const btnTutorialClose = document.getElementById('btn-tutorial-close');
  const btnTutorialGuided = document.getElementById('btn-tutorial-guided');
  const btnTutorialDemo = document.getElementById('btn-tutorial-demo');

  // Order metadata
  const ORDER_META = {
    croissant: { icon: '🥐', label: 'Prompt Croissant', color: '#ffb74d', reward: 22, critter: '🐰' },
    cached:    { icon: '🍪', label: 'Repeat Menu Query', color: '#f59e0b', reward: 26, critter: '🦉' },
    jalapeno:  { icon: '🌶️', label: 'Spicy Injection!', color: '#ef4444', reward: 28, critter: '🦝' },
    tart:      { icon: '🍓', label: 'RAG Berry Tart', color: '#fb7185', reward: 34, critter: '🦊' },
    boba:      { icon: '🧋', label: 'Code-Exec Boba', color: '#2dd4bf', reward: 36, critter: '🐼' },
    souffle:   { icon: '🍮', label: 'Deep-Think Soufflé', color: '#a78bfa', reward: 44, critter: '🐶' }
  };

  // Winding Cozy Bakery Ribbon Path Waypoints
  const PATH_POINTS = [
    { x: 60,  y: 150 },
    { x: 760, y: 150 },
    { x: 760, y: 310 },
    { x: 140, y: 310 },
    { x: 140, y: 470 },
    { x: 815, y: 470 }
  ];

  // 8 Cozy Pastel Counter Slots along the Bakery Ribbon
  const COUNTER_SLOTS = [
    { index: 0, x: 220, y: 82,  anchorX: 220, anchorY: 150, label: 'Slot 1 (Entry Filter)' },
    { index: 1, x: 450, y: 82,  anchorX: 450, anchorY: 150, label: 'Slot 2 (Front Counter)' },
    { index: 2, x: 660, y: 82,  anchorX: 660, anchorY: 150, label: 'Slot 3 (Corner Prep)' },
    { index: 3, x: 560, y: 230, anchorX: 560, anchorY: 310, label: 'Slot 4 (Mid Kitchen R)' },
    { index: 4, x: 330, y: 230, anchorX: 330, anchorY: 310, label: 'Slot 5 (Mid Kitchen L)' },
    { index: 5, x: 250, y: 390, anchorX: 250, anchorY: 470, label: 'Slot 6 (Finishing L)' },
    { index: 6, x: 470, y: 390, anchorX: 470, anchorY: 470, label: 'Slot 7 (Finishing M)' },
    { index: 7, x: 680, y: 390, anchorX: 680, anchorY: 470, label: 'Slot 8 (Serving Window)' }
  ];

  // Game State
  let currentLevelIdx = 0;
  let running = false;
  let speedMultiplier = 1;
  let frameCount = 0;
  let coins = 220;
  let servedCount = 0;
  let goalServed = 12;
  let hearts = 5;
  let selectedPaletteId = 'flash_oven';
  let inspectedSlotIdx = null;

  // Telemetry counters
  let stats = {
    totalFinished: 0,
    hallucinations: 0,
    injectionsBlocked: 0,
    ragGrounded: 0,
    cacheHits: 0
  };

  // Entities
  let placedStations = {}; // slotIndex -> { type, level, busyTimer, currentOrder, servedTotal, catPhase }
  let orders = [];         // moving order trays along the path
  let particles = [];      // floating hearts, sparkles, coins, steam
  let deliveryCats = [];   // cute mini sous-chef paws zipping between stations

  // Initialize Level Selector & Palette
  function initUI() {
    levelSelect.innerHTML = '';
    window.CAFE_LEVELS.forEach((lvl, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = lvl.name;
      levelSelect.appendChild(opt);
    });

    levelSelect.addEventListener('change', (e) => {
      loadLevel(parseInt(e.target.value, 10));
    });

    renderPalette();

    btnPlayPause.addEventListener('click', togglePlay);
    btnSpeed.addEventListener('click', () => {
      speedMultiplier = speedMultiplier === 1 ? 2 : 1;
      btnSpeed.textContent = `⚡ ${speedMultiplier}x`;
    });

    btnBlueprint.addEventListener('click', applyAutoBlueprint);
    btnReset.addEventListener('click', () => loadLevel(currentLevelIdx));

    if (btnHowTo && tutorialModal) {
      btnHowTo.addEventListener('click', () => {
        running = false;
        btnPlayPause.textContent = '▶️ Open Cafe';
        tutorialModal.classList.remove('hidden');
      });
    }
    if (btnTutorialClose && tutorialModal) {
      btnTutorialClose.addEventListener('click', () => {
        tutorialModal.classList.add('hidden');
      });
    }
    if (btnTutorialGuided && tutorialModal) {
      btnTutorialGuided.addEventListener('click', () => {
        tutorialModal.classList.add('hidden');
        coachBubble.innerHTML = `🐾 <strong>Step 1:</strong> Click the glowing <strong>[➕ Slot 2]</strong> pad at the top of the conveyor belt to place your first <strong>🥐 Flash Pastry Oven</strong>!`;
      });
    }
    if (btnTutorialDemo && tutorialModal) {
      btnTutorialDemo.addEventListener('click', () => {
        tutorialModal.classList.add('hidden');
        applyAutoBlueprint();
      });
    }

    btnAudio.addEventListener('click', () => {
      const on = window.cafeAudio.toggle();
      btnAudio.textContent = on ? '🔊' : '🔇';
    });

    inspClose.addEventListener('click', () => {
      inspectedSlotIdx = null;
      inspector.classList.add('hidden');
    });

    btnUpgradeStation.addEventListener('click', upgradeInspectedStation);
    btnSellStation.addEventListener('click', sellInspectedStation);

    btnModalNext.addEventListener('click', () => {
      shiftModal.classList.add('hidden');
      const nextIdx = (currentLevelIdx + 1) % window.CAFE_LEVELS.length;
      levelSelect.value = nextIdx;
      loadLevel(nextIdx);
    });

    btnModalRetry.addEventListener('click', () => {
      shiftModal.classList.add('hidden');
      loadLevel(currentLevelIdx);
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'BUTTON') {
        e.preventDefault();
        togglePlay();
      }
    });

    canvas.addEventListener('click', onCanvasClick);
  }

  function renderPalette() {
    stationPalette.innerHTML = '';
    Object.values(window.STATION_CATALOG).forEach((st) => {
      const card = document.createElement('div');
      card.className = `station-card ${selectedPaletteId === st.id ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="station-icon-box" style="background:${st.bgLight}; border-color:${st.color}">
          ${st.icon}
        </div>
        <div class="station-info">
          <div class="station-title-row">
            <span class="station-name">${st.name}</span>
            <span class="station-cost">🪙 ${st.cost}</span>
          </div>
          <p class="station-desc">${st.desc}</p>
          <span class="station-ai-role">${st.aiRole}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        selectedPaletteId = st.id;
        inspectedSlotIdx = null;
        inspector.classList.add('hidden');
        renderPalette();
      });
      stationPalette.appendChild(card);
    });
  }

  function loadLevel(idx) {
    currentLevelIdx = idx;
    const lvl = window.CAFE_LEVELS[idx];
    running = false;
    btnPlayPause.textContent = '▶️ Open Cafe';
    frameCount = 0;
    coins = lvl.coins;
    servedCount = 0;
    goalServed = lvl.goalServed;
    hearts = 5;
    placedStations = {};
    orders = [];
    particles = [];
    deliveryCats = [];
    inspectedSlotIdx = null;
    inspector.classList.add('hidden');
    shiftModal.classList.add('hidden');

    stats = {
      totalFinished: 0,
      hallucinations: 0,
      injectionsBlocked: 0,
      ragGrounded: 0,
      cacheHits: 0
    };

    levelBadge.textContent = `Day ${lvl.id} of ${window.CAFE_LEVELS.length}`;
    levelStory.textContent = lvl.story;

    // Forecast chips
    orderForecast.innerHTML = '';
    Object.keys(lvl.orderWeights).forEach((k) => {
      const meta = ORDER_META[k];
      const pct = Math.round(lvl.orderWeights[k] * 100);
      const chip = document.createElement('span');
      chip.className = 'forecast-chip';
      chip.textContent = `${meta.icon} ${meta.label} (${pct}%)`;
      orderForecast.appendChild(chip);
    });

    updateHUD();
    evaluateKitchenArchitecture();
  }

  function togglePlay() {
    window.cafeAudio.init();
    if (tutorialModal && !tutorialModal.classList.contains('hidden')) {
      tutorialModal.classList.add('hidden');
    }
    if (Object.keys(placedStations).length === 0 && !running) {
      // Friendly Starter Protection: Auto-place a starter Flash Pastry Oven on Slot 2 so first-time players never lose with an empty kitchen!
      const starterDef = window.STATION_CATALOG['flash_oven'];
      if (starterDef && coins >= starterDef.cost) {
        coins -= starterDef.cost;
        placedStations[1] = {
          type: 'flash_oven',
          level: 1,
          busyTimer: 0,
          maxTimer: starterDef.processTime,
          currentOrder: null,
          servedTotal: 0,
          catPhase: 0
        };
        window.cafeAudio.playPlace();
        spawnBurst(COUNTER_SLOTS[1].x, COUNTER_SLOTS[1].y, starterDef.color, 12);
        spawnFloatingText(COUNTER_SLOTS[1].x, COUNTER_SLOTS[1].y - 28, '🥐 Starter AI Chef Placed!', '#6d28d9');
        coachBubble.innerHTML = `🐾 <strong>Meow!</strong> I placed a starter <strong>🥐 Flash Pastry Oven</strong> on <strong>Slot 2</strong> for you! Click more <strong>[➕ Slot]</strong> pads to add AI chefs as orders arrive!`;
        updateHUD();
        evaluateKitchenArchitecture();
      }
    }
    running = !running;
    btnPlayPause.textContent = running ? '⏸️ Pause Shift' : '▶️ Open Cafe';
  }

  function applyAutoBlueprint() {
    const lvl = window.CAFE_LEVELS[currentLevelIdx];
    loadLevel(currentLevelIdx);
    lvl.blueprint.forEach((bp) => {
      const cat = window.STATION_CATALOG[bp.type];
      placedStations[bp.slotIndex] = {
        type: bp.type,
        level: bp.level || 1,
        busyTimer: 0,
        maxTimer: cat.processTime,
        currentOrder: null,
        servedTotal: 0,
        catPhase: Math.random() * Math.PI * 2
      };
    });
    coins = Math.max(40, coins - 160);
    window.cafeAudio.playUpgrade();
    spawnFloatingText(450, 260, '✨ Optimal AI Kitchen Ready! ✨', '#8b5cf6');
    updateHUD();
    evaluateKitchenArchitecture();
    running = true;
    btnPlayPause.textContent = '⏸️ Pause Shift';
  }

  // Architecture Coach Linter (Educates user on their current AI kitchen pipeline!)
  function evaluateKitchenArchitecture() {
    const lvl = window.CAFE_LEVELS[currentLevelIdx];
    const weights = lvl.orderWeights;
    const typesPlaced = Object.values(placedStations).map((s) => s.type);
    const alerts = [];

    if (typesPlaced.length === 0) {
      alerts.push({
        kind: 'warn',
        text: '⚠️ Empty Kitchen! Click a pastel slot on the map or press "✨ Auto-Chef Blueprint" to place AI stations.'
      });
    } else {
      if (weights.jalapeno && !typesPlaced.includes('guardrail_sieve')) {
        alerts.push({
          kind: 'warn',
          text: '🌶️ Prompt Injection Risk! Place a 🛡️ Guardrail Flour Sieve near Slot 1 or 2 to neutralize spicy raccoon orders!'
        });
      }
      if (weights.tart && !typesPlaced.includes('vector_garden')) {
        alerts.push({
          kind: 'warn',
          text: '👻 Hallucination Warning! Berry Tarts need a 🍓 Vector Berry Patch (RAG) so chefs don\'t guess facts!'
        });
      }
      if (weights.boba && !typesPlaced.includes('tool_blender')) {
        alerts.push({
          kind: 'warn',
          text: '🧋 Math/API Alert! Add a 🧋 Tool-Call Boba Mixer to run deterministic calculations accurately.'
        });
      }
      if (weights.souffle && !typesPlaced.includes('reasoning_oven')) {
        alerts.push({
          kind: 'warn',
          text: '🍮 Complex Soufflés Incoming! Add a 🍮 Deep-Think Soufflé Oven for multi-step reasoning.'
        });
      }
      if (weights.cached && !typesPlaced.includes('cookie_cache')) {
        alerts.push({
          kind: 'warn',
          text: '🍪 Token Tip: Place a 🍪 Context Cache Jar to serve repeat owl queries 3x faster with +50% bonus coins!'
        });
      }
      if (alerts.length === 0) {
        alerts.push({
          kind: 'good',
          text: '✅ 5-Star AI Pipeline! Your kitchen has Guardrails, Grounding, and the right Model Ovens for this shift!'
        });
      }
    }

    linterAlerts.innerHTML = alerts
      .map((a) => `<div class="linter-item ${a.kind === 'good' ? 'linter-good' : 'linter-warn'}">${a.text}</div>`)
      .join('');
  }

  function onCanvasClick(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    // Check if player clicked one of the 8 Counter Slots
    for (const slot of COUNTER_SLOTS) {
      const dx = mx - slot.x;
      const dy = my - slot.y;
      if (Math.hypot(dx, dy) <= 42) {
        const existing = placedStations[slot.index];
        if (existing) {
          openInspector(slot.index);
          return;
        } else {
          // Place selected station
          const stDef = window.STATION_CATALOG[selectedPaletteId];
          if (!stDef) return;
          if (coins < stDef.cost) {
            window.cafeAudio.playMiss();
            spawnFloatingText(slot.x, slot.y - 20, 'Need More 🪙 Star Coins!', '#e11d48');
            return;
          }
          coins -= stDef.cost;
          placedStations[slot.index] = {
            type: stDef.id,
            level: 1,
            busyTimer: 0,
            maxTimer: stDef.processTime,
            currentOrder: null,
            servedTotal: 0,
            catPhase: Math.random() * Math.PI * 2
          };
          window.cafeAudio.playPlace();
          spawnBurst(slot.x, slot.y, stDef.color, 10);
          spawnFloatingText(slot.x, slot.y - 28, `${stDef.icon} Placed!`, '#6d28d9');
          updateHUD();
          evaluateKitchenArchitecture();
          return;
        }
      }
    }

    // Clicked elsewhere -> close inspector
    inspectedSlotIdx = null;
    inspector.classList.add('hidden');
  }

  function openInspector(slotIdx) {
    inspectedSlotIdx = slotIdx;
    const st = placedStations[slotIdx];
    if (!st) return;
    const def = window.STATION_CATALOG[st.type];
    inspTitle.textContent = `${def.name} (Lv.${st.level})`;
    inspDesc.textContent = `${def.aiRole} — ${def.desc}`;
    const upCost = def.upgradeCost * st.level;
    const refund = Math.round(def.cost * 0.65);
    inspMetrics.innerHTML = `
      <div>⚡ <strong>Bake Speed:</strong> ${(60 / Math.max(12, def.processTime * Math.pow(0.78, st.level - 1))).toFixed(1)} orders/sec</div>
      <div>🍰 <strong>Treats Prepared:</strong> ${st.servedTotal}</div>
    `;
    btnUpgradeStation.textContent = st.level >= 3 ? '🌟 Max Level (Lv.3)' : `⬆️ Upgrade (🪙 ${upCost})`;
    btnUpgradeStation.disabled = st.level >= 3;
    btnSellStation.textContent = `🧹 Refund (+🪙 ${refund})`;
    inspector.classList.remove('hidden');
  }

  function upgradeInspectedStation() {
    if (inspectedSlotIdx === null) return;
    const st = placedStations[inspectedSlotIdx];
    if (!st || st.level >= 3) return;
    const def = window.STATION_CATALOG[st.type];
    const upCost = def.upgradeCost * st.level;
    if (coins < upCost) {
      window.cafeAudio.playMiss();
      spawnFloatingText(COUNTER_SLOTS[inspectedSlotIdx].x, COUNTER_SLOTS[inspectedSlotIdx].y - 25, 'Not enough 🪙!', '#e11d48');
      return;
    }
    coins -= upCost;
    st.level += 1;
    window.cafeAudio.playUpgrade();
    const slot = COUNTER_SLOTS[inspectedSlotIdx];
    spawnBurst(slot.x, slot.y, '#fbbf24', 14);
    spawnFloatingText(slot.x, slot.y - 30, `⭐ Upgraded Lv.${st.level}!`, '#8b5cf6');
    updateHUD();
    openInspector(inspectedSlotIdx);
  }

  function sellInspectedStation() {
    if (inspectedSlotIdx === null) return;
    const st = placedStations[inspectedSlotIdx];
    if (!st) return;
    const def = window.STATION_CATALOG[st.type];
    const refund = Math.round(def.cost * 0.65);
    coins += refund;
    const slot = COUNTER_SLOTS[inspectedSlotIdx];
    spawnFloatingText(slot.x, slot.y - 20, `+🪙 ${refund}`, '#10b981');
    delete placedStations[inspectedSlotIdx];
    inspectedSlotIdx = null;
    inspector.classList.add('hidden');
    updateHUD();
    evaluateKitchenArchitecture();
  }

  // Spawn an incoming critter order on the ribbon
  function spawnOrder() {
    const lvl = window.CAFE_LEVELS[currentLevelIdx];
    const weights = lvl.orderWeights;
    const r = Math.random();
    let acc = 0;
    let chosenKind = 'croissant';
    for (const [k, w] of Object.entries(weights)) {
      acc += w;
      if (r <= acc) {
        chosenKind = k;
        break;
      }
    }
    const meta = ORDER_META[chosenKind];
    orders.push({
      id: Math.random().toString(36).slice(2),
      kind: chosenKind,
      icon: meta.icon,
      critter: meta.critter,
      color: meta.color,
      reward: meta.reward,
      segIdx: 0,
      segProgress: 0,
      x: PATH_POINTS[0].x,
      y: PATH_POINTS[0].y,
      speed: 1.35,
      state: 'raw', // 'raw' -> 'Sanitized' -> 'baked'
      grounded: false,
      wobble: Math.random() * Math.PI * 2
    });
  }

  function getSubagentBoost(slotIdx) {
    const slot = COUNTER_SLOTS[slotIdx];
    let boost = 1.0;
    for (const [otherIdx, st] of Object.entries(placedStations)) {
      if (st.type === 'subagent_bell' && Number(otherIdx) !== Number(slotIdx)) {
        const otherSlot = COUNTER_SLOTS[otherIdx];
        const dist = Math.hypot(slot.x - otherSlot.x, slot.y - otherSlot.y);
        if (dist < 280) {
          boost += 0.35 + (st.level - 1) * 0.15;
        }
      }
    }
    return boost;
  }

  function updateSimulation() {
    const lvl = window.CAFE_LEVELS[currentLevelIdx];
    frameCount++;

    // Spawn orders periodically
    if (frameCount % lvl.spawnInterval === 10) {
      spawnOrder();
    }

    // Update stations & check if they can pick up a passing order
    for (const [slotIdxStr, st] of Object.entries(placedStations)) {
      const slotIdx = Number(slotIdxStr);
      const slot = COUNTER_SLOTS[slotIdx];
      const def = window.STATION_CATALOG[st.type];
      st.catPhase += 0.08;

      if (st.busyTimer > 0) {
        st.busyTimer -= 1;
        if (st.busyTimer <= 0 && st.currentOrder) {
          // Finished processing!
          completeStationOrder(slot, st, def, st.currentOrder);
          st.currentOrder = null;
        }
      } else {
        // Look for a matching raw order near this counter's anchor point
        for (let i = 0; i < orders.length; i++) {
          const ord = orders[i];
          if (ord.state === 'baked') continue;
          const dist = Math.hypot(ord.x - slot.anchorX, ord.y - slot.anchorY);
          if (dist <= 52 && canStationProcessOrder(st.type, ord)) {
            // Grab order from ribbon into station!
            orders.splice(i, 1);
            const boost = getSubagentBoost(slotIdx);
            const effTime = Math.max(12, Math.round((def.processTime * Math.pow(0.78, st.level - 1)) / boost));
            st.busyTimer = effTime;
            st.maxTimer = effTime;
            st.currentOrder = ord;
            break;
          }
        }
      }
    }

    // Move orders along the bakery conveyor ribbon
    for (let i = orders.length - 1; i >= 0; i--) {
      const ord = orders[i];
      ord.wobble += 0.12;
      const pA = PATH_POINTS[ord.segIdx];
      const pB = PATH_POINTS[ord.segIdx + 1];
      if (!pB) {
        // Reached the Customer Serving Window!
        handleOrderAtWindow(ord);
        orders.splice(i, 1);
        continue;
      }
      const segLen = Math.hypot(pB.x - pA.x, pB.y - pA.y);
      ord.segProgress += ord.speed;
      const t = Math.min(1, ord.segProgress / segLen);
      ord.x = pA.x + (pB.x - pA.x) * t;
      ord.y = pA.y + (pB.y - pA.y) * t;
      if (t >= 1) {
        ord.segIdx += 1;
        ord.segProgress = 0;
      }
    }

    // Update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 1;
      if (p.life <= 0) particles.splice(i, 1);
    }

    updateHUD();
  }

  function canStationProcessOrder(stationType, ord) {
    if (stationType === 'guardrail_sieve') {
      return ord.kind === 'jalapeno';
    }
    if (ord.kind === 'jalapeno') {
      // Unfiltered prompt injection cannot be safely baked by normal ovens!
      return false;
    }
    if (stationType === 'cookie_cache') {
      return ord.kind === 'cached' || ord.kind === 'croissant';
    }
    if (stationType === 'vector_garden') {
      return ord.kind === 'tart';
    }
    if (stationType === 'tool_blender') {
      return ord.kind === 'boba';
    }
    if (stationType === 'reasoning_oven') {
      return ord.kind === 'souffle' || ord.kind === 'croissant';
    }
    if (stationType === 'flash_oven') {
      return ord.kind === 'croissant' || ord.kind === 'cached';
    }
    if (stationType === 'subagent_bell') {
      return ord.kind !== 'jalapeno';
    }
    return false;
  }

  function completeStationOrder(slot, st, def, ord) {
    st.servedTotal += 1;

    // Special case: Guardrail Sieve sanitizes Spicy Jalapeno into a safe Prompt Croissant and puts it back on the ribbon!
    if (st.type === 'guardrail_sieve' && ord.kind === 'jalapeno') {
      stats.injectionsBlocked += 1;
      coins += 15;
      window.cafeAudio.playSieveBlock();
      spawnBurst(slot.x, slot.y, '#10b981', 8);
      spawnFloatingText(slot.x, slot.y - 26, '🛡️ Injection Sanitized! +🪙15', '#059669');
      // Convert to safe croissant and return to ribbon so a downstream oven can bake it (or mark ready!)
      ord.kind = 'croissant';
      ord.icon = '🥐';
      ord.color = '#ffb74d';
      ord.state = 'baked';
      ord.x = slot.anchorX;
      ord.y = slot.anchorY;
      orders.push(ord);
      return;
    }

    // All other stations finish baking and serve the happy customer!
    stats.totalFinished += 1;
    servedCount += 1;

    let earned = ord.reward + (st.level - 1) * 5;
    if (st.type === 'cookie_cache') {
      stats.cacheHits += 1;
      earned = Math.round(earned * 1.4);
      window.cafeAudio.playCacheHit();
      spawnFloatingText(slot.x, slot.y - 26, `🍪 Cache Hit! +🪙${earned}`, '#d97706');
    } else if (st.type === 'vector_garden') {
      stats.ragGrounded += 1;
      window.cafeAudio.playServe();
      spawnFloatingText(slot.x, slot.y - 26, `🍓 RAG Grounded! +🪙${earned}`, '#e11d48');
    } else {
      window.cafeAudio.playServe();
      spawnFloatingText(slot.x, slot.y - 26, `${ord.icon} Served! +🪙${earned}`, '#db2777');
    }

    coins += earned;
    spawnBurst(slot.x, slot.y, def.color, 10);

    if (servedCount >= goalServed) {
      triggerShiftEnd(true);
    }
  }

  function handleOrderAtWindow(ord) {
    if (ord.state === 'baked') {
      servedCount += 1;
      stats.totalFinished += 1;
      coins += ord.reward;
      window.cafeAudio.playServe();
      spawnBurst(815, 470, '#f472b6', 12);
      spawnFloatingText(795, 435, `💖 Happy ${ord.critter}! +🪙${ord.reward}`, '#db2777');
      if (servedCount >= goalServed) {
        triggerShiftEnd(true);
      }
      return;
    }

    // Raw / unbaked or ungrounded order slipped all the way to the customer!
    hearts = Math.max(0, hearts - 1);
    stats.totalFinished += 1;
    stats.hallucinations += 1;
    window.cafeAudio.playMiss();
    const reason =
      ord.kind === 'jalapeno'
        ? '💥 Spicy Injection Slipped Through! (-1 💖)'
        : ord.kind === 'tart'
        ? '👻 Ungrounded Hallucination Puff! (-1 💖)'
        : `😿 Unserved ${ord.icon} Order! (-1 💖)`;
    spawnBurst(815, 470, '#ef4444', 14);
    spawnFloatingText(720, 435, reason, '#dc2626');

    if (hearts <= 0) {
      triggerShiftEnd(false);
    }
  }

  function triggerShiftEnd(victory) {
    running = false;
    btnPlayPause.textContent = '▶️ Open Cafe';
    const lvl = window.CAFE_LEVELS[currentLevelIdx];

    if (victory) {
      window.cafeAudio.playChime();
      modalEmoji.textContent = '🎉🐱‍🍳🥐';
      modalTitle.textContent = `5-Star Shift Complete!`;
      modalSubtitle.textContent = `You and Chef Whiskers served all ${goalServed} critter customers on ${lvl.name}!`;
      btnModalNext.classList.remove('hidden');
    } else {
      modalEmoji.textContent = '😿💨';
      modalTitle.textContent = 'Kitchen Overwhelmed!';
      modalSubtitle.textContent = 'Too many Hallucination Puffs or Spicy Prompt Injections slipped past the counter! Try placing a Guardrail Sieve or click ✨ Auto-Chef Blueprint!';
      btnModalNext.classList.add('hidden');
    }

    modalLesson.textContent = lvl.lesson;
    const hallRate = stats.totalFinished > 0 ? Math.round((stats.hallucinations / stats.totalFinished) * 100) : 0;
    modalStats.innerHTML = `
      <span>🍰 Served: ${servedCount}/${goalServed}</span>
      <span>🛡️ Injections Blocked: ${stats.injectionsBlocked}</span>
      <span>👻 Hallucinations: ${hallRate}%</span>
    `;
    shiftModal.classList.remove('hidden');
  }

  function updateHUD() {
    hudCoins.textContent = coins;
    hudServed.textContent = `${servedCount} / ${goalServed}`;
    hudHearts.textContent = '♥'.repeat(hearts) + '♡'.repeat(Math.max(0, 5 - hearts));
    const cachePct = stats.totalFinished > 0 ? Math.min(95, Math.round((stats.cacheHits / Math.max(1, stats.totalFinished)) * 95)) : 0;
    hudSavings.textContent = `${cachePct}%`;

    const hallRate = stats.totalFinished > 0 ? Math.round((stats.hallucinations / stats.totalFinished) * 100) : 0;
    metricHallucination.textContent = `${hallRate}%`;
    metricBlocked.textContent = `${stats.injectionsBlocked} 🛡️`;
    metricRag.textContent = `${stats.ragGrounded} 🍓`;
    metricChefs.textContent = `${Object.keys(placedStations).length} 🐾`;
  }

  function spawnBurst(x, y, color, count = 8) {
    for (let i = 0; i < count; i++) {
      const ang = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const spd = 1.2 + Math.random() * 2.2;
      particles.push({
        kind: 'dot',
        x,
        y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd - 0.5,
        color,
        life: 28 + Math.random() * 12
      });
    }
  }

  function spawnFloatingText(x, y, text, color) {
    particles.push({
      kind: 'text',
      x,
      y,
      vx: 0,
      vy: -0.9,
      text,
      color,
      life: 52
    });
  }

  // Rendering the Cozy Kawaii Bakery
  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Cozy Pastel Checkered Cafe Floor
    const tileSize = 45;
    for (let r = 0; r < canvas.height / tileSize; r++) {
      for (let c = 0; c < canvas.width / tileSize; c++) {
        ctx.fillStyle = (r + c) % 2 === 0 ? '#fffaf5' : '#fff0f6';
        ctx.fillRect(c * tileSize, r * tileSize, tileSize, tileSize);
      }
    }

    // 2. Cute Top Cafe Awning Stripes
    for (let i = 0; i < 18; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#ffccd7' : '#ffffff';
      ctx.beginPath();
      ctx.roundRect(i * 50, -8, 52, 26, 12);
      ctx.fill();
    }

    // 3. Draw Winding Pastry Conveyor Ribbon
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Outer pastel border
    ctx.strokeStyle = '#f3bfd1';
    ctx.lineWidth = 52;
    ctx.beginPath();
    PATH_POINTS.forEach((pt, idx) => {
      if (idx === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    });
    ctx.stroke();

    // Inner cream ribbon
    ctx.strokeStyle = '#fff5eb';
    ctx.lineWidth = 42;
    ctx.stroke();

    // Animated marching pastry chevrons along path
    ctx.strokeStyle = '#f9d5e2';
    ctx.lineWidth = 4;
    ctx.setLineDash([12, 16]);
    ctx.lineDashOffset = -(frameCount * 0.8);
    ctx.stroke();
    ctx.restore();

    // 4. Draw Entry Door ("Prompt Counter") & Exit Window ("Critter Pickup")
    drawEndpointBadge(60, 150, '🚪 Order Queue', '#ff8da1');
    drawEndpointBadge(815, 470, '🛎️ Pickup Window', '#8b5cf6');

    // 5. Draw Counter Slots & Placed AI Robot-Cat Stations
    COUNTER_SLOTS.forEach((slot) => {
      const st = placedStations[slot.index];

      // Subtle tether line from counter slot to conveyor anchor
      ctx.save();
      ctx.strokeStyle = st ? '#d8b4fe' : '#f3d1dc';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(slot.x, slot.y);
      ctx.lineTo(slot.anchorX, slot.anchorY);
      ctx.stroke();
      ctx.restore();

      if (!st) {
        // Empty Placeable Counter Pad
        ctx.save();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
        ctx.strokeStyle = '#f49cbb';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(slot.x - 38, slot.y - 34, 76, 68, 16);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#c08497';
        ctx.font = '700 18px Fredoka, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('➕', slot.x, slot.y + 4);
        ctx.font = '600 10px Quicksand, sans-serif';
        ctx.fillText(`Slot ${slot.index + 1}`, slot.x, slot.y + 22);
        ctx.restore();
      } else {
        drawPlacedStation(slot, st);
      }
    });

    // 6. Draw Moving Critter Orders on the Conveyor Ribbon
    orders.forEach((ord) => {
      const bob = Math.sin(ord.wobble) * 3.5;
      ctx.save();

      // Cute plate shadow
      ctx.fillStyle = 'rgba(136, 78, 104, 0.14)';
      ctx.beginPath();
      ctx.ellipse(ord.x, ord.y + 14, 20, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Pastel Pastry Cloche / Plate
      ctx.fillStyle = ord.state === 'baked' ? '#dcfce7' : '#ffffff';
      ctx.strokeStyle = ord.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(ord.x, ord.y + bob, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Pastry Icon
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(ord.icon, ord.x, ord.y + bob + 1);

      // Tiny Critter Customer Avatar Badge
      ctx.font = '13px sans-serif';
      ctx.fillText(ord.critter, ord.x + 15, ord.y + bob - 14);

      ctx.restore();
    });

    // 7. Draw Floating Particles & Pop Text
    particles.forEach((p) => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 25));
      if (p.kind === 'dot') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.kind === 'text') {
        ctx.font = '700 13px Fredoka, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4;
        ctx.strokeText(p.text, p.x, p.y);
        ctx.fillStyle = p.color;
        ctx.fillText(p.text, p.x, p.y);
      }
      ctx.restore();
    });

    // 8. Draw On-Canvas Step-by-Step Guided Callout when Shift Hasn't Started
    if (!running && servedCount === 0) {
      const numStations = Object.keys(placedStations).length;
      const pulse = Math.sin(frameCount * 0.1) * 4;
      ctx.save();
      if (numStations === 0) {
        // Highlight Slot 2 (x: 450, y: 82) with a glowing ring + callout pill
        const targetSlot = COUNTER_SLOTS[1];
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 3.5;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.roundRect(targetSlot.x - 44, targetSlot.y - 40, 88, 80, 20);
        ctx.stroke();
        ctx.setLineDash([]);

        // Callout pill below Slot 2
        const bx = 450;
        const by = 192 + pulse;
        ctx.fillStyle = '#6d28d9';
        ctx.beginPath();
        ctx.roundRect(bx - 235, by - 18, 470, 34, 17);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 13px Fredoka, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('👆 STEP 1: Click [➕ Slot 2] above to place your first 🥐 AI Chef!', bx, by + 4);
      } else {
        // Player placed at least 1 station -> prompt them to click Open Cafe!
        const bx = 450;
        const by = 192 + pulse;
        ctx.fillStyle = '#059669';
        ctx.beginPath();
        ctx.roundRect(bx - 245, by - 18, 490, 34, 17);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = '700 13px Fredoka, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🎉 STEP 2: Kitchen Ready! Click [▶️ Open Cafe] at top-right (or Spacebar)!', bx, by + 4);
      }
      ctx.restore();
    }
  }

  function drawEndpointBadge(x, y, text, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x - 52, y - 38, 104, 24, 10);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 11px Fredoka, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y - 22);
    ctx.restore();
  }

  // Draws an adorable Robot-Cat Chef + Station Counter
  function drawPlacedStation(slot, st) {
    const def = window.STATION_CATALOG[st.type];
    const bounce = st.busyTimer > 0 ? Math.sin(st.catPhase * 2.4) * 3 : Math.sin(st.catPhase) * 1.5;

    ctx.save();

    // If Subagent Sous-Chef Bell, draw soft aura circle
    if (st.type === 'subagent_bell') {
      ctx.strokeStyle = 'rgba(244, 114, 182, 0.28)';
      ctx.fillStyle = 'rgba(244, 114, 182, 0.06)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(slot.x, slot.y, 130, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Counter Card Base
    ctx.fillStyle = def.bgLight;
    ctx.strokeStyle = def.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(slot.x - 42, slot.y - 38 + bounce, 84, 74, 18);
    ctx.fill();
    ctx.stroke();

    // Cute Robot-Cat Chef Ears poking above the station!
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#432c39';
    ctx.lineWidth = 2;
    // Left Cat Ear
    ctx.beginPath();
    ctx.moveTo(slot.x - 24, slot.y - 36 + bounce);
    ctx.lineTo(slot.x - 16, slot.y - 50 + bounce);
    ctx.lineTo(slot.x - 6, slot.y - 36 + bounce);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Right Cat Ear
    ctx.beginPath();
    ctx.moveTo(slot.x + 6, slot.y - 36 + bounce);
    ctx.lineTo(slot.x + 16, slot.y - 50 + bounce);
    ctx.lineTo(slot.x + 24, slot.y - 36 + bounce);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Tiny Chef Hat in center between ears
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(slot.x, slot.y - 44 + bounce, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Station Icon
    ctx.font = '26px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(def.icon, slot.x, slot.y - 6 + bounce);

    // Level Stars
    ctx.font = '11px sans-serif';
    ctx.fillText('⭐'.repeat(st.level), slot.x, slot.y + 22 + bounce);

    // Progress Bar when actively baking an order
    if (st.busyTimer > 0 && st.maxTimer > 0) {
      const pct = 1 - st.busyTimer / st.maxTimer;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.roundRect(slot.x - 30, slot.y - 30 + bounce, 60, 7, 4);
      ctx.fill();

      ctx.fillStyle = def.color;
      ctx.beginPath();
      ctx.roundRect(slot.x - 30, slot.y - 30 + bounce, 60 * pct, 7, 4);
      ctx.fill();
    }

    ctx.restore();
  }

  // Main 60FPS Game Loop
  function gameLoop() {
    if (running) {
      for (let s = 0; s < speedMultiplier; s++) {
        updateSimulation();
      }
    } else {
      frameCount++;
      // Animate idle cat ears even when paused
      Object.values(placedStations).forEach((st) => {
        st.catPhase += 0.04;
      });
    }
    drawScene();
    requestAnimationFrame(gameLoop);
  }

  // Boot!
  initUI();
  loadLevel(0);
  requestAnimationFrame(gameLoop);
})();
