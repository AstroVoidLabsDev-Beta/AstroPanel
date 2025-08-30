# 🚀 AstroPanel (Best Hosting Panel).

A modern **game hosting panel** inspired by **Pterodactyl** and **Teryx v4 Panel**.  
This project includes **authentication (login/register)**, **theme switcher**, **Minecraft 4K video background**, and a basic dashboard with nodes, servers, and admin placeholders.  

Runs on **Port 3000** by default.  

---

## ✨ Features
- 🔑 User authentication (Login/Register with email & username)  
- 🎬 Minecraft 4K background video on login page  
- 🌓 Theme switcher (Light/Dark)  
- 📊 Dashboard (Users + Nodes + Servers placeholders)  
- ⚡ Built with React + TailwindCSS + Node.js + MongoDB  

---

## 🛠 Tech Stack
- **Frontend:** React + Vite + TailwindCSS  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose ODM)  

---

## 📥 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/panel-starter.git
cd panel-starter
```

### 1️⃣ Backend
```bash
cd backend
npm install
npm start
```
- Runs on **http://localhost:5000**

### 2️⃣ Frontend
```bash
cd ../frontend
npm install
npm run dev
```
- Open **http://localhost:3000**

---

## ⚙️ Configuration
- Rename `.env.example` → `.env` inside `backend/` and set your MongoDB URI + JWT secret.
```env
MONGO_URI=mongodb://localhost:27017/panel
JWT_SECRET=yourSecretKey
PORT=5000
```

---

## 📸 Screenshots
_Add your screenshots here once the panel is running._

---

## 🌐 Deployment
- You can deploy on any VPS (Ubuntu 20.04/22.04)  
- Make sure Node.js 18+ and MongoDB are installed.  
- Run backend with **PM2** or Docker.  
- Serve frontend with **Vite build** + Nginx/Apache.  

---

## 🤝 Credits
- Best Panel For Hosting  
- Built with ❤️ by **ITZ_YTANSH**  
