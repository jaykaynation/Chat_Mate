# ChatMate

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

---

## Pages
- `/` Home Page
- `/login`
- `/login2`
- `/Dashboard`
- `/about`
- `/settings`
- `/themes`
- `/playground`

---

## 📁 Project Structure
/
├── components/ # UI Components (Chat, Layout, etc.)
├── constants/ # Personas and theme constants
├── context/ # Theme + Persona Context
├── hooks/ # Custom React Hooks
├── pages/ # Next.js Routing Pages
├── store/ # Zustand Global Store
├── styles/ # Tailwind Setup
├── utils/ # Fake AI logic, theme utils
└── tests/ # Component + utility tests

---

## 🛠️ Setup
```bash
git clone https://github.com/jaykaynation/ChatMate.git
cd ChatMate
npm install
npm run dev

---

🧠 Simulated Personas
Each bot has:

Speaking style (e.g. poetic, casual, techy)

Custom greeting

Custom reply logic

---

🌈 Themes
Supports:

Default

Messenger Blue

Terminal Green

iOS Style

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

pages/login2.tsx ← where AuthCard is used

pages/_app.tsx ← custom app wrapper that can affect routing

pages/_document.tsx ← if customized

✅ Components
components/AuthCard.tsx

components/ChatInput.tsx

components/ChatMessage.tsx

components/ChatMessageList.tsx

components/Layout.tsx

components/Navbar.tsx

components/NavbarWrapper.tsx

components/PersonaSelector.tsx

components/ThemePreview.tsx