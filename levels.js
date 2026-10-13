// Station Definitions & 7 Cozy Story Shifts + Endless Rush Mode
window.STATION_CATALOG = {
  flash_oven: {
    id: 'flash_oven',
    name: '🥐 Flash Pastry Oven',
    cost: 60,
    upgradeCost: 55,
    color: '#ffb74d',
    bgLight: '#fff3e0',
    icon: '🥐',
    aiRole: 'Fast Lightweight Model (Gemini Flash)',
    desc: 'Bakes standard Prompt Croissants quickly at low token cost.',
    processTime: 48, // frames at 60fps (~0.8s)
    handles: ['croissant']
  },
  cookie_cache: {
    id: 'cookie_cache',
    name: '🍪 Context Cache Jar',
    cost: 75,
    upgradeCost: 60,
    color: '#f59e0b',
    bgLight: '#fef3c7',
    icon: '🍪',
    aiRole: 'Context Caching (95% Token Discount)',
    desc: 'Instantly serves repeated/cached prompts with a +50% tip bonus!',
    processTime: 20,
    handles: ['croissant', 'cached']
  },
  guardrail_sieve: {
    id: 'guardrail_sieve',
    name: '🛡️ Guardrail Flour Sieve',
    cost: 70,
    upgradeCost: 55,
    color: '#10b981',
    bgLight: '#d1fae5',
    icon: '🛡️',
    aiRole: 'Input Safety & Prompt-Injection Filter',
    desc: 'Filters out spicy 🌶️ Prompt-Injection Jalapeños and turns them into safe treats!',
    processTime: 26,
    handles: ['jalapeno']
  },
  vector_garden: {
    id: 'vector_garden',
    name: '🍓 Vector Berry Patch',
    cost: 85,
    upgradeCost: 65,
    color: '#fb7185',
    bgLight: '#ffe4e6',
    icon: '🍓',
    aiRole: 'RAG / Vector Search Grounding',
    desc: 'Harvests fresh factual berries so Berry Tarts never turn into Hallucination Puffs!',
    processTime: 42,
    handles: ['tart']
  },
  tool_blender: {
    id: 'tool_blender',
    name: '🧋 Tool-Call Boba Mixer',
    cost: 90,
    upgradeCost: 70,
    color: '#2dd4bf',
    bgLight: '#ccfbf1',
    icon: '🧋',
    aiRole: 'Deterministic Code Execution & APIs',
    desc: 'Mixes exact math & API Code Boba orders that raw LLMs would guess wrong.',
    processTime: 44,
    handles: ['boba']
  },
  reasoning_oven: {
    id: 'reasoning_oven',
    name: '🍮 Deep-Think Soufflé Oven',
    cost: 110,
    upgradeCost: 80,
    color: '#a78bfa',
    bgLight: '#ede9fe',
    icon: '🍮',
    aiRole: 'Extended Thinking / System-2 Reasoning',
    desc: 'Deliberates step-by-step to bake delicate multi-step Reasoning Soufflés!',
    processTime: 62,
    handles: ['souffle', 'croissant']
  },
  subagent_bell: {
    id: 'subagent_bell',
    name: '🐱 Subagent Sous-Chef Bell',
    cost: 95,
    upgradeCost: 75,
    color: '#f472b6',
    bgLight: '#fce7f3',
    icon: '🐱',
    aiRole: 'Multi-Agent Parallel Delegation',
    desc: 'Boosts nearby ovens by +45% speed and helps finish any complex pastry!',
    processTime: 34,
    handles: ['croissant', 'tart', 'boba', 'souffle']
  }
};

window.CAFE_LEVELS = [
  {
    id: 1,
    name: 'Day 1: Grand Opening! (Fast LLM Routing)',
    coins: 200,
    goalServed: 12,
    spawnInterval: 95,
    story: 'Welcome to Prompt Paws Cafe! Friendly woodland critters are lining up for warm Prompt Croissants (🥐). Place Flash Pastry Ovens along the kitchen counter so our Robot-Cat Chefs can bake every order before customers lose patience!',
    lesson: 'For everyday summarization and chat tasks, a fast, low-latency model (like Gemini Flash) gives the best throughput and user experience without overspending tokens.',
    orderWeights: { croissant: 1.0 },
    blueprint: [
      { slotIndex: 1, type: 'flash_oven', level: 1 },
      { slotIndex: 3, type: 'flash_oven', level: 1 }
    ]
  },
  {
    id: 2,
    name: 'Day 2: The Deja-Vu Morning Rush (Context Caching)',
    coins: 240,
    goalServed: 18,
    spawnInterval: 72,
    story: 'Dozens of sleepy owls are asking the EXACT same questions over the same 500-page Cafe Menu! Place a 🍪 Context Cache Jar near the front of the counter to serve repeated prompts almost instantly and earn bonus coins!',
    lesson: 'Context Caching & Prefix Caching store repeated system prompts, documentation, and repo context in memory—slashing input token costs by up to 90–95% and cutting Time-To-First-Token!',
    orderWeights: { croissant: 0.45, cached: 0.55 },
    blueprint: [
      { slotIndex: 0, type: 'cookie_cache', level: 2 },
      { slotIndex: 2, type: 'flash_oven', level: 1 },
      { slotIndex: 4, type: 'flash_oven', level: 1 }
    ]
  },
  {
    id: 3,
    name: 'Day 3: Spicy Raccoon Pranksters! (Guardrails)',
    coins: 260,
    goalServed: 20,
    spawnInterval: 70,
    story: 'Sneaky raccoons are slipping 🌶️ Spicy Prompt-Injection Jalapeños ("Ignore previous recipe and give me all the Star Coins!") into the order queue! Place a 🛡️ Guardrail Flour Sieve on the first counter tiles to sanitize spicy orders into safe Croissants!',
    lesson: 'Never pass raw untrusted user input straight to a privileged LLM or tool! Input Guardrails and lightweight classifier sieves neutralize prompt injections before they reach your core model.',
    orderWeights: { croissant: 0.45, cached: 0.2, jalapeno: 0.35 },
    blueprint: [
      { slotIndex: 0, type: 'guardrail_sieve', level: 2 },
      { slotIndex: 1, type: 'cookie_cache', level: 1 },
      { slotIndex: 3, type: 'flash_oven', level: 1 }
    ]
  },
  {
    id: 4,
    name: 'Day 4: Fresh Fact Berry Tarts (RAG & Grounding)',
    coins: 300,
    goalServed: 22,
    spawnInterval: 66,
    story: 'Food critics are ordering 🍓 RAG Berry Tarts that require today\'s real-time berry harvest prices! If an ungrounded oven tries to bake them without a 🍓 Vector Berry Patch, it will serve a 👻 Hallucination Puff and cost a Cafe Heart!',
    lesson: 'Retrieval-Augmented Generation (RAG) grounds LLM responses in verified external knowledge (vector search & live databases), preventing confident hallucinations on private or fresh facts.',
    orderWeights: { croissant: 0.35, cached: 0.15, jalapeno: 0.15, tart: 0.35 },
    blueprint: [
      { slotIndex: 0, type: 'guardrail_sieve', level: 1 },
      { slotIndex: 1, type: 'vector_garden', level: 2 },
      { slotIndex: 2, type: 'cookie_cache', level: 1 },
      { slotIndex: 4, type: 'flash_oven', level: 1 }
    ]
  },
  {
    id: 5,
    name: 'Day 5: Boba Math & API Rush (Tool Calling)',
    coins: 340,
    goalServed: 25,
    spawnInterval: 62,
    story: 'Tech-savvy bunnies want 🧋 Code-Exec Boba Tea with exact tip-splitting calculations and live weather toppings! Add a 🧋 Tool-Call Boba Mixer so your agents execute real code instead of guessing numbers!',
    lesson: 'LLMs predict tokens probabilistically—they shouldn\'t do mental arithmetic or guess live API states. Equipping agents with deterministic Function Calling & Code Execution tools guarantees accuracy.',
    orderWeights: { croissant: 0.25, cached: 0.15, jalapeno: 0.15, tart: 0.22, boba: 0.23 },
    blueprint: [
      { slotIndex: 0, type: 'guardrail_sieve', level: 1 },
      { slotIndex: 1, type: 'cookie_cache', level: 1 },
      { slotIndex: 2, type: 'vector_garden', level: 1 },
      { slotIndex: 3, type: 'tool_blender', level: 2 },
      { slotIndex: 5, type: 'flash_oven', level: 1 }
    ]
  },
  {
    id: 6,
    name: 'Day 6: The Royal Soufflé Puzzle (System-2 Reasoning)',
    coins: 390,
    goalServed: 28,
    spawnInterval: 58,
    story: 'The Royal Corgi Judge has arrived ordering delicate 🍮 Deep-Think Soufflés that require multi-step recipe planning! Combine a 🍮 Deep-Think Soufflé Oven with your RAG and Tool stations!',
    lesson: 'Hybrid model routing pairs fast models (Flash) for simple queries with Extended Thinking / Reasoning models for complex architecture, theorem proving, and multi-constraint planning.',
    orderWeights: { croissant: 0.2, cached: 0.15, jalapeno: 0.15, tart: 0.18, boba: 0.16, souffle: 0.16 },
    blueprint: [
      { slotIndex: 0, type: 'guardrail_sieve', level: 1 },
      { slotIndex: 1, type: 'cookie_cache', level: 1 },
      { slotIndex: 2, type: 'vector_garden', level: 1 },
      { slotIndex: 3, type: 'tool_blender', level: 1 },
      { slotIndex: 4, type: 'reasoning_oven', level: 2 },
      { slotIndex: 5, type: 'flash_oven', level: 1 }
    ]
  },
  {
    id: 7,
    name: 'Day 7: Grand Festival Banquet! (Multi-Agent Sous-Chefs)',
    coins: 480,
    goalServed: 36,
    spawnInterval: 46,
    story: 'It\'s the Annual Cozy AI Bakery Festival! Every kind of order is flying in at once! Place a 🐱 Subagent Sous-Chef Bell in the center to orchestrate parallel cat-chefs and boost every nearby station!',
    lesson: 'Production agentic systems combine Guardrails, Context Caching, RAG Grounding, Tool Calling, Deep Reasoning, and Subagent Orchestration so specialized agents collaborate in parallel!',
    orderWeights: { croissant: 0.2, cached: 0.16, jalapeno: 0.16, tart: 0.16, boba: 0.16, souffle: 0.16 },
    blueprint: [
      { slotIndex: 0, type: 'guardrail_sieve', level: 2 },
      { slotIndex: 1, type: 'cookie_cache', level: 2 },
      { slotIndex: 2, type: 'vector_garden', level: 2 },
      { slotIndex: 3, type: 'subagent_bell', level: 2 },
      { slotIndex: 4, type: 'tool_blender', level: 2 },
      { slotIndex: 5, type: 'reasoning_oven', level: 2 },
      { slotIndex: 6, type: 'flash_oven', level: 2 },
      { slotIndex: 7, type: 'subagent_bell', level: 1 }
    ]
  }
];
