# 🌌 AstroPanel

AstroPanel is a custom Minecraft hosting panel inspired by TeryxLabs.  
It features **Login/Register**, **Dashboard placeholders (Users, Servers, Nodes, Admin Panel)**, and a **Minecraft video background**.

---

## 🚀 Features
- Login & Register page
- Dashboard placeholders: Users, Servers, Nodes, Admin
- Minecraft video background
- Runs on **port 3000**
- One-command start: `node .`

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/AstroPanel.git
cd AstroPanel
npm install
```

---

## ▶️ Running the Panel

```bash
node .
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
AstroPanel/
├── index.js          # Main server file
├── package.json      # Dependencies & start script
├── config.json       # Panel configuration
└── public/
    ├── index.html    # Login/Register page
    ├── dashboard.html # Dashboard placeholder
    ├── style.css     # Styles
    └── minecraft-bg.mp4  # Add manually
```

---

## ⚙️ Configuration

`config.json` allows basic panel settings:

```json
{
  "panelName": "AstroPanel",
  "theme": "dark"
}
```

---

## 🛠 Tech Stack
- Node.js
- Express.js
- HTML / CSS / JS

---

## 📜 License
MIT

---
