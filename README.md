***

# Vyantra Mental Health Platform

A modern, **student-focused web application** providing AI-powered mental health support for anxiety, motivation, stress, and emotional wellbeing.

***

## 🧠 Overview

Vyantra is a safe space for students and young adults to discuss their mental wellness, get guidance on stress and studies, and access supportive resources via an AI chat interface.  
**All responses are strictly focused on mental health topics—never random trivia or technical questions.**

***

## 📦 File Structure

```
V01_vyantra-mental-health-platform
├─ app                  # Next.js app directory (routes, pages, APIs)
│  ├─ api
│  │  ├─ chat
│  │  │  ├─ App.js
│  │  │  └─ route.ts    # Gemini API connection for chatbot
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  └─ signup
│  │      └─ page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components           # React UI components
│  ├─ chat-bot.tsx      # Main chatbot interface
│  ├─ theme-provider.tsx
│  └─ ui                # Custom UI primitives (buttons, cards, forms, etc.)
├─ hooks                # Custom React hooks
├─ lib                  # Utility functions
├─ public               # Static assets (images, icons, JS)
├─ styles               # Global styling
├─ ...                  # Config files, package.json, README.md, tsconfig.json, etc.
```

***

## ⚡ Getting Started

**Clone the repo & install dependencies:**
```bash
git clone https://github.com/your-username/V01_vyantra-mental-health-platform.git
cd V01_vyantra-mental-health-platform
npm install           # or: pnpm install
```

**Set environment variables:**  
Add your Gemini API key in `.env.local`:
```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

**Run locally:**
```bash
npm run dev
```
_App will start on http://localhost:3000_

***

## 💡 Features

- **AI Mental Health Chatbot:**  
  Student-centric support, powered by Google Gemini API, answering only mental health queries.

- **Empathetic responses:**  
  Focus on study anxiety, emotional distress, and personal wellness.

- **Crisis intervention:**  
  Detection of severe distress and guidance to real resources.

- **Modern design:**  
  Built with React, Next.js, Shadcn/UI, and Tailwind CSS.

***

## 🛠️ How it Works

- Chat with the AI bot for mental wellness help.
- The bot strictly answers mental health, motivation, study, and emotional topics.
- Any unrelated questions (math, programming, trivia) are politely declined.

***

## 🛡️ Privacy & Boundaries

- `.env` files and `node_modules` are ignored via `.gitignore`.
- No personal user data is stored—only for live usage.

***

## 👩‍💻 Contributing

Pull requests and discussions welcome!

- Suggest UI tweaks, new resources, or prompts focused on student wellbeing.
- See `CONTRIBUTING.md` for guidelines (add this file if you want to enable open collaboration).

***

## 📝 License

MIT License.  

***
-------
## 🪟 PREVIEW
-------

<img width="1919" height="1079" alt="Screenshot 2025-10-29 193008" src="https://github.com/user-attachments/assets/1ea59e84-3798-4e87-8b2d-12be219ed6c3" />
<img width="1919" height="1077" alt="Screenshot 2025-10-29 193045" src="https://github.com/user-attachments/assets/aaafb0df-7928-4118-b3f8-0728799b408f" />
<img width="1919" height="1074" alt="Screenshot 2025-10-29 193120" src="https://github.com/user-attachments/assets/51d1b4db-0b4d-4bbd-a037-e14f7906db86" />
<img width="1919" height="1077" alt="Screenshot 2025-10-29 193132" src="https://github.com/user-attachments/assets/9fca7d8f-83aa-45ae-b0e1-e2d99332953e" />
<img width="1917" height="1079" alt="Screenshot 2025-10-29 193146" src="https://github.com/user-attachments/assets/08c46245-a9bb-463b-90a9-7532187b2dc6" />

Preview Link :
https://mental-health-vyantra-x8ns.vercel.app/


***


