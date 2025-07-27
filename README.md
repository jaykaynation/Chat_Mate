# ChatMate (Enhanced)

Professional-grade front-end chatbot UI using Next.js, Tailwind, TypeScript, Zustand, and Framer Motion.

## 🚀 Features

- ⚛️ **React + TypeScript** – scalable, typed architecture
- 🎨 **Tailwind CSS** – modern UI design system
- 💫 **Framer Motion** – chat bubble & page animations
- 🧠 **Simulated Personas** – ShakespeareBot, TechSupportBot, FriendBot
- 🌗 **Light/Dark Themes** – with dynamic UI skin variants
- 🔧 **Settings Panel** – customize UX
- 📱 **Responsive + PWA Ready**
- 🔁 **Chat History Export**, Local Storage session support
- 🌍 **i18n & Accessibility** – ARIA roles, keyboard nav
- 🔒 **Simulated Auth Flows** – guest/dev/recruiter logins
- 🧪 **Testing Ready** – Jest + Testing Library
- 📊 **Analytics Hooks** – message count, error logging

---

## Pages
- `/` Chat UI
- `/about`
- `/settings`
- `/themes`
- `/playground`

---

## 📁 Project Structure
/
├── components/ # UI Components (Chat, Layout, etc.)
├── context/ # Theme + Persona Context
├── hooks/ # Custom React Hooks
├── pages/ # Next.js Routing Pages
├── public/ # Assets
├── styles/ # Tailwind Setup
├── utils/ # Fake AI logic, theme utils
├── store/ # Zustand Global Store
└── tests/ # Component + utility tests

---

## 🛠️ Setup
```bash
git clone https://github.com/yourname/chatmate.git
cd chatmate
npm install
npm run dev

---

🧠 Simulated Personas
Each bot has:

Avatar

Speaking style (e.g. poetic, casual, techy)

Custom greeting

Custom reply logic

---

🌈 Themes
Supports:

Messenger Blue

Glassmorphic

Terminal Green

WhatsApp Inspired

Minimal Gray

Stored in localStorage and applied globally.

---

📤 Export + Persist
Download chat as .json, .txt, or .md

Saves last session in browser

---

🔐 Simulated Auth
Log in as:

👤 Guest

💼 Developer

🧑‍💼 Recruiter

Stores avatar and name in session.

---





✅ Core Entry Points
pages/index.tsx ← usually renders your layout and key components

pages/login.tsx ← where AuthCard is used

pages/_app.tsx ← custom app wrapper that can affect routing

pages/_document.tsx ← if customized

✅ Components
components/AuthCard.tsx ← where the invalid element might come from

components/Layout.tsx

components/Navbar.tsx

components/ChatMessage.tsx

components/ChatInput.tsx

components/ChatMessageList.tsx

✅ Shared Logic
utils/ imports used in index.tsx or login.tsx

context/ or hooks/ if any custom hooks are being used