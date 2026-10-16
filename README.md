# 🐾🥐 Prompt Paws: The Cozy AI Agent Cafe & Bakery

> **A cozy, pastel kawaii 2D AI Systems & Agent Engineering simulation game where adorable Robot-Cat Chefs teach you Context Caching, Input Guardrails, RAG Grounding, Tool Calling, System-2 Reasoning, and Multi-Agent Orchestration!**

[![Play Live on GitHub Pages](https://img.shields.io/badge/🎮_PLAY_LIVE_NOW-Prompt_Paws_Cozy_AI_Cafe-ff6b8b?style=for-the-badge)](https://robinamirbahar.github.io/cozy-ai-agent-cafe-game/)
[![Built with HTML5 Canvas 60FPS](https://img.shields.io/badge/Engine-HTML5_Canvas_60FPS-8b5cf6?style=for-the-badge)](https://robinamirbahar.github.io/cozy-ai-agent-cafe-game/)
[![Zero Dependencies](https://img.shields.io/badge/Audio-Procedural_WebAudio_Synth-10b981?style=for-the-badge)](https://robinamirbahar.github.io/cozy-ai-agent-cafe-game/)

![Prompt Paws: Cozy AI Agent Cafe Banner](assets/cozy_ai_cafe_banner.jpg)

---

## 🎮 Play Directly in Your Browser!

👉 **[Launch Prompt Paws: The Cozy AI Agent Cafe & Bakery](https://robinamirbahar.github.io/cozy-ai-agent-cafe-game/)**

---

## 🎯 What Is This Game & How Do You Play? (30-Second Guide)

**Prompt Paws** is a **cozy Tower-Defense & Kitchen-Management game for AI Agent Architecture**!
Instead of fighting monsters, you are the **Head AI Pastry Architect** running a pastel bakery:
- **Customer Pastry Orders (`🥐`, `🍪`, `🌶️`, `🍓`, `🧋`, `🍮`) = Incoming User Prompts** moving along the bakery conveyor belt toward the **Pickup Window (`🛎️`)**.
- **Robot-Cat Kitchen Stations = Real-World AI Engineering Components** (Fast LLMs, Context Caches, Input Guardrails, RAG Vector DBs, Deterministic Tool Callers, System-2 Reasoning Models, and Multi-Agent Sous-Chefs) that intercept and process prompts before they reach the customer!
- **How You Win or Lose:** If an order is baked by the right AI Chef Station, you earn **🪙 Star Coins**! If an unbaked order, an ungrounded **👻 Hallucination Puff**, or a sneaky **🌶️ Prompt Injection** slips all the way to the Pickup Window, you lose a **💖 Cafe Heart**!

![How to Play Prompt Paws in 3 Easy Steps](https://files.catbox.moe/i9wg40.jpg)

### 🕹️ How to Play in 3 Easy Steps:
1. **STEP 1 — Pick an AI Chef Station (Left Menu):** Click a station card on the left sidebar (start with **🥐 Flash Pastry Oven** for `🪙 60`). Look at the **Order Forecast chips** under the level story to see which prompt types are coming!
2. **STEP 2 — Click Any `[➕ Slot]` Tile on the Map:** Click one of the 8 pastel counter pads (`Slot 1`–`Slot 8`) beside the conveyor belt to place your Robot-Cat Chef. *(Tip: Click a placed chef anytime to **⬆️ Upgrade** its baking speed or **🧹 Refund** it!)*
3. **STEP 3 — Click `▶️ Open Cafe` (or `✨ Auto-Chef Blueprint`):**
   - Click **`▶️ Open Cafe`** (or press `Spacebar`) to start the shift and watch your Robot-Cat Chefs bake!
   - **Want to watch an instant demo first?** Click **`✨ Auto-Chef Blueprint`** in the top bar and the game will automatically build the optimal AI pipeline for the current level and run it for you!

---

## ✨ Why Another System Design Game—But Cozy?

While dark cyberpunk server-defense games teach cloud infrastructure through DDoS lasers and exploding servers, **Prompt Paws** reimagines **modern AI Agent Architecture** as a warm, stress-free, pastel pastry kitchen!

Friendly woodland critters (🐰 Bunnies, 🦉 Owls, 🦊 Foxes, 🐼 Pandas, 🐶 Corgis—and sneaky 🦝 Raccoon Pranksters!) line up at the counter ordering different AI-powered treats. Your job as **Head AI Pastry Architect** is to place and upgrade 7 specialized **Robot-Cat Chef Stations** along the winding bakery ribbon so every order is grounded, safe, and baked on time!

---

## 🧁 AI Engineering Concepts Mapped to Cozy Bakery Stations

| Bakery Station | Cost | Real-World AI Engineering Concept | What It Does in the Kitchen |
| :--- | :---: | :--- | :--- |
| **🥐 Flash Pastry Oven** | `🪙 60` | **Fast Lightweight LLM (Gemini Flash)** | Bakes everyday **Prompt Croissants** (`🥐`) with low latency and minimal token cost. |
| **🍪 Context Cache Jar** | `🪙 75` | **Prefix & Context Caching (95% Discount)** | Instantly serves repeated **Owl Menu Queries** (`🍪`) at 3× speed with a **+40% Star Coin bonus**! |
| **🛡️ Guardrail Flour Sieve** | `🪙 70` | **Input Safety & Prompt-Injection Filter** | Catches sneaky **Spicy Prompt-Injection Jalapeños** (`🌶️`) before they reach your ovens and sanitizes them into safe Croissants! |
| **🍓 Vector Berry Patch** | `🪙 85` | **RAG (Retrieval-Augmented Generation)** | Harvests fresh factual berries for **RAG Berry Tarts** (`🍓`) so ungrounded ovens never serve **👻 Hallucination Puffs**! |
| **🧋 Tool-Call Boba Mixer** | `🪙 90` | **Deterministic Function Calling & Code Exec** | Executes exact Python math & live API recipes for **Code Boba** (`🧋`) orders instead of guessing probabilities. |
| **🍮 Deep-Think Soufflé Oven** | `🪙 110` | **Extended Thinking / System-2 Reasoning** | Deliberates step-by-step to bake delicate multi-constraint **Reasoning Soufflés** (`🍮`). |
| **🐱 Subagent Sous-Chef Bell** | `🪙 95` | **Multi-Agent Parallel Delegation** | Orchestrates helper cat-paws that boost all nearby stations by **+35% to +65% speed**! |

---

## 🗺️ Cozy AI Kitchen Architecture (Mermaid Diagram)

```mermaid
flowchart LR
    subgraph CritterQueue["🚪 Woodland Critter Order Queue"]
        O1["🥐 Prompt Croissant"]
        O2["🍪 Repeat Menu Query"]
        O3["🌶️ Spicy Injection Jalapeño"]
        O4["🍓 Fresh Fact Berry Tart"]
        O5["🧋 Code-Exec Boba Tea"]
        O6["🍮 Deep-Think Soufflé"]
    end

    subgraph KitchenPipeline["🐾 Prompt Paws AI Kitchen Pipeline"]
        Sieve["🛡️ Guardrail Flour Sieve\n(Sanitizes 🌶️ -> 🥐)"]
        Cache["🍪 Context Cache Jar\n(95% Token Savings)"]
        RAG["🍓 Vector Berry Patch\n(RAG Fact Grounding)"]
        Tools["🧋 Tool-Call Boba Mixer\n(Deterministic Python/API)"]
        Flash["🥐 Flash Pastry Oven\n(Fast Low-Cost LLM)"]
        Reason["🍮 Deep-Think Soufflé Oven\n(System-2 Reasoning)"]
        Subagent["🐱 Subagent Sous-Chef Bell\n(+45% Parallel Speed Aura)"]
    end

    O3 --> Sieve --> Flash
    O2 --> Cache
    O1 --> Flash
    O4 --> RAG
    O5 --> Tools
    O6 --> Reason
    Subagent -. "Boosts Nearby Chefs" .-> Flash
    Subagent -. "Boosts Nearby Chefs" .-> RAG
    Subagent -. "Boosts Nearby Chefs" .-> Tools
    Subagent -. "Boosts Nearby Chefs" .-> Reason

    Cache & Flash & RAG & Tools & Reason --> Pickup["🛎️ 5-Star Critter Pickup Window 💖"]
```

---

## 📖 7 Story Shifts (Curriculum)

1. **Day 1: Grand Opening! (Fast LLM Routing)** — Learn throughput vs. latency using **🥐 Flash Pastry Ovens**.
2. **Day 2: The Deja-Vu Morning Rush (Context Caching)** — Use the **🍪 Context Cache Jar** to serve repeated system-prompt queries at a fraction of the cost.
3. **Day 3: Spicy Raccoon Pranksters! (Guardrails)** — Place **🛡️ Guardrail Flour Sieves** at the front of the pipeline to neutralize prompt-injection attacks.
4. **Day 4: Fresh Fact Berry Tarts (RAG & Grounding)** — Prevent **👻 Hallucination Puffs** by grounding orders with the **🍓 Vector Berry Patch**.
5. **Day 5: Boba Math & API Rush (Tool Calling)** — Add the **🧋 Tool-Call Boba Mixer** for deterministic code execution.
6. **Day 6: The Royal Soufflé Puzzle (System-2 Reasoning)** — Route complex multi-step soufflés to the **🍮 Deep-Think Soufflé Oven**.
7. **Day 7: Grand Festival Banquet! (Multi-Agent Sous-Chefs)** — Combine all stations with **🐱 Subagent Sous-Chef Bells** to survive the ultimate festival rush!

---

## 🛠️ Key Features

- **✨ One-Click "Auto-Chef Blueprint"**: Want to see the optimal AI architecture for any shift immediately? Click **✨ Auto-Chef Blueprint** in the top bar and watch the Robot-Cat Chefs orchestrate the entire pipeline!
- **🐱‍🍳 Live AI Architecture Linter ("Chef Whiskers")**: Real-time static analysis of your kitchen layout warns you if your pipeline is vulnerable to prompt injections, ungrounded RAG hallucinations, or uncached token waste.
- **🎵 Procedural WebAudio Cafe Synthesizer**: Cozy, zero-dependency chimes, oven dings, cache-hit pops, and victory chords generated dynamically via the Web Audio API.
- **⚡ Zero Build Step**: Pure ES6 + HTML5 Canvas (`index.html`, `styles.css`, `audio.js`, `levels.js`, `game.js`). Clone or open `index.html` directly in any browser!

---

## 🚀 Run Locally in 5 Seconds

```bash
git clone https://github.com/RobinaMirbahar/cozy-ai-agent-cafe-game.git
cd cozy-ai-agent-cafe-game
# Open index.html directly in your browser or serve with any static server:
npx serve .
```

---

## 📚 Documentation & Walkthrough

- [Implementation Plan (`docs/IMPLEMENTATION_PLAN.md`)](docs/IMPLEMENTATION_PLAN.md)
- [Gameplay & Architecture Walkthrough (`docs/WALKTHROUGH.md`)](docs/WALKTHROUGH.md)

---

*Designed & built with 💖 and 🐾 by **Robina Mirbahar**.*
