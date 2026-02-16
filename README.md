# 🎮 Vocab Master - Network Edition

Run this on your computer and everyone on your WiFi can play!

## 🚀 SETUP:

### Step 0: Install Node.js (if you don't have it)
Go to https://nodejs.org and download + install Node.js

### Step 1: Double-click START.bat (Windows)
That's it! It will install everything and start the server automatically.

**OR manually:**
```bash
npm install
npm start
```

### Step 3: Get Your IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" - something like `192.168.1.100`

**Mac/Linux:**
```bash
ifconfig
```
or
```bash
ip addr
```

### Step 4: Share With Friends!
Tell everyone to go to: `http://YOUR_IP:8000`

Example: `http://192.168.1.100:8000`

## ⚠️ FIREWALL BLOCKED?

**Windows:**
- When prompted, click "Allow access"
- Or: Settings → Firewall → Allow an app → Node.js

**Mac:**
- System Preferences → Security → Firewall → Allow Node

**Try different port:**
Edit `server.js` and change `const PORT = 8000;` to `const PORT = 3000;`

## 🎯 How It Works:

✅ Real server running on YOUR computer  
✅ Everyone connects to YOUR_IP:8000  
✅ Shared leaderboard updates every 2 seconds  
✅ All scores saved in memory (resets when server stops)  

## 📱 Access From:
- Other computers on WiFi
- Phones on WiFi  
- Tablets on WiFi
- ANY device on your network!

Press Ctrl+C to stop the server.
