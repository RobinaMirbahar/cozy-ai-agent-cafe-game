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


---

## 👩‍💻 About the Author

<div align="center">
  <img src="https://raw.githubusercontent.com/RobinaMirbahar/RobinaMirbahar/main/ProfileImages/Hi-Robina.gif" height="75" width="75" alt="Robina Mirbahar" />

  ### **Robina Mirbahar — Google Cloud & AI Architect**

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1000&color=4285F4&center=true&vCenter=true&width=720&lines=Google+Cloud+%26+Agentic+AI+Solutions+Architect;Author+of+'AI+Engineering'+(2026);Pakistan+Lead+%40+IEEE+AI+Caravan+(94+Countries);Women+Techmakers+Ambassador+%26+Mentor+%40+Google+for+Startups" alt="Robina Mirbahar Dynamic Headline" />

  <p>
    AI Researcher, Cloud Solutions Architect, and Author of <b><i>"AI Engineering: From Classical ML to RAG &amp; Agentic AI Systems"</i> (2026)</b>.<br/>
    Bridging cutting-edge open-weights AI research (Gemma 4, Gemini, Google ADK, Multi-LoRA, MCP &amp; A2A) with production-grade Cloud Run &amp; Vertex AI engineering.
  </p>

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/robinamirbahar)
  [![Amazon Book](https://img.shields.io/badge/Amazon-Book%20(2026)-FF9900?style=for-the-badge&logo=amazon&logoColor=white)](https://amazon.com/dp/B0GWCZWCF4)
  [![Google Developer](https://img.shields.io/badge/Google%20Developer-Profile-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/profile/u/106918534005910641104)
  [![DEV Community](https://img.shields.io/badge/DEV-Articles-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/robinamirbahar)
  [![Medium](https://img.shields.io/badge/Medium-Blog-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@robinamirbahar)
  [![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@robinacodesai)
  [![Twitter/X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/robinamirbahar)
  [![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/21196122/robina-mirbahar)
  [![Credly](https://img.shields.io/badge/Credly-FF6B35?style=for-the-badge&logo=credly&logoColor=white)](https://www.credly.com/users/robinamirbahar)

</div>

### 🚀 Featured Google Cloud & Agentic AI Portfolio by Robina Mirbahar

| Repository | Architecture & Focus | Live Status |
| :--- | :--- | :--- |
| **[gemma4-multilora-adk-eval](https://github.com/RobinaMirbahar/gemma4-multilora-adk-eval)** | Dynamic Multi-LoRA Hot-Swapping & CI/CD Agent Evaluation (`adk eval`) on Cloud Run GPUs with Gemma 4 & vLLM | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/gemma4-multilora-adk-eval?style=flat-square&color=4285F4) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/gemma4-multilora-adk-eval?style=flat-square) |
| **[slothsre-napops](https://github.com/RobinaMirbahar/slothsre-napops)** | SlothSRE ("NapOps") — Overnight Gemma 4 & Google ADK Incident Digest Agent with OpenTelemetry & Sentry AI Monitoring | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/slothsre-napops?style=flat-square&color=34A853) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/slothsre-napops?style=flat-square) |
| **[streamforge-event-adk](https://github.com/RobinaMirbahar/streamforge-event-adk)** | Real-Time Event-Driven Multi-Agent Pipelines on Google Cloud with ADK (`ParallelAgent` & `LoopAgent`), Eventarc & Pub/Sub | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/streamforge-event-adk?style=flat-square&color=FBBC04) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/streamforge-event-adk?style=flat-square) |
| **[a2a-mcp-mesh-cloudrun](https://github.com/RobinaMirbahar/a2a-mcp-mesh-cloudrun)** | Agent-to-Agent (A2A) & Multi-MCP Mesh on Cloud Run with Gemma 4, Google ADK, Spanner Graph & AlloyDB | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/a2a-mcp-mesh-cloudrun?style=flat-square&color=EA4335) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/a2a-mcp-mesh-cloudrun?style=flat-square) |
| **[cloudguard-gemma-agent](https://github.com/RobinaMirbahar/cloudguard-gemma-agent)** | 6-Part Production Gemma Enterprise Agent Series (ADK, Cloud Run L4 GPU, Firestore, Model Armor, Vertex AI QLoRA) | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/cloudguard-gemma-agent?style=flat-square&color=4285F4) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/cloudguard-gemma-agent?style=flat-square) |
| **[Comic-Studio-Ai](https://github.com/RobinaMirbahar/Comic-Studio-Ai)** | Multi-Agent Comic Generator powered by Google Gemini API & FastAPI deployed on Google Cloud Run | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/Comic-Studio-Ai?style=flat-square&color=EA4335) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/Comic-Studio-Ai?style=flat-square) |
| **[vertex-ai-imagen3](https://github.com/RobinaMirbahar/vertex-ai-imagen3)** | Generate AI-powered product & editorial images using Google Vertex AI Imagen 3 in Google Colab | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/vertex-ai-imagen3?style=flat-square&color=34A853) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/vertex-ai-imagen3?style=flat-square) |
| **[Python-Learning-Assistant](https://github.com/RobinaMirbahar/Python-Learning-Assistant)** | AI-powered Python tutor covering 50+ interactive exercises with real-time feedback built with Streamlit + Gemini API | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/Python-Learning-Assistant?style=flat-square&color=FBBC04) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/Python-Learning-Assistant?style=flat-square) |
| **[cozy-ai-agent-cafe-game](https://github.com/RobinaMirbahar/cozy-ai-agent-cafe-game)** | Prompt Paws: 60 FPS Cozy AI Agent Bakery Simulation Game teaching RAG, Guardrails, Context Caching & Multi-Agent Loops | ![Stars](https://img.shields.io/github/stars/RobinaMirbahar/cozy-ai-agent-cafe-game?style=flat-square&color=7928CA) ![Last Commit](https://img.shields.io/github/last-commit/RobinaMirbahar/cozy-ai-agent-cafe-game?style=flat-square) |

<div align="center">
  <img src="https://raw.githubusercontent.com/RobinaMirbahar/RobinaMirbahar/main/ProfileImages/GithubBanner.svg" alt="Robina Mirbahar Banner" width="100%" />
</div>

---

## Star, Fork & Sponsor This Project

[![Star on GitHub](https://img.shields.io/github/stars/RobinaMirbahar/cozy-ai-agent-cafe-game?style=for-the-badge&logo=github&label=Star)](https://github.com/RobinaMirbahar/cozy-ai-agent-cafe-game)
[![Fork on GitHub](https://img.shields.io/github/forks/RobinaMirbahar/cozy-ai-agent-cafe-game?style=for-the-badge&logo=github&label=Fork)](https://github.com/RobinaMirbahar/cozy-ai-agent-cafe-game/fork)
[![Sponsor RobinaMirbahar](https://img.shields.io/badge/Sponsor-%40RobinaMirbahar-ea4aaa?style=for-the-badge&logo=githubsponsors)](https://github.com/sponsors/RobinaMirbahar)

If this project is helpful to your work:
* **Star this Repository:** [**Star `RobinaMirbahar/cozy-ai-agent-cafe-game` on GitHub**](https://github.com/RobinaMirbahar/cozy-ai-agent-cafe-game) to bookmark it and help others discover it.
* **Fork & Customize:** [**Fork `RobinaMirbahar/cozy-ai-agent-cafe-game`**](https://github.com/RobinaMirbahar/cozy-ai-agent-cafe-game/fork) to build and experiment with your own workflows.
* **Sponsor on GitHub:** [**Sponsor `@RobinaMirbahar` on GitHub Sponsors (`github.com/sponsors/RobinaMirbahar`)**](https://github.com/sponsors/RobinaMirbahar) to support open-source AI, Google Cloud, and Gemini engineering projects!

