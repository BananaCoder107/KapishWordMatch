const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = 8002;

// In-memory leaderboard (shared across all connections)
let leaderboard = [];

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// Add score to leaderboard
app.post('/api/leaderboard', (req, res) => {
    const { name, score } = req.body;
    
    if (!name || typeof score !== 'number') {
        return res.status(400).json({ error: 'Invalid data' });
    }

    leaderboard.push({
        name: name.substring(0, 20),
        score,
        date: new Date().toLocaleTimeString(),
        timestamp: Date.now()
    });
    
    // Sort by score and keep top 10
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    
    res.json({ success: true, leaderboard });
});

// Serve the game
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

// Get local IP address
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (let iface of Object.values(interfaces)) {
        for (let alias of iface) {
            if (alias.family === 'IPv4' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return 'localhost';
}

app.listen(PORT, '0.0.0.0', () => {
    const localIP = getLocalIP();
    
    console.log('');
    console.log('═══════════════════════════════════════════════');
    console.log('🎮  VOCAB MASTER SERVER IS RUNNING!');
    console.log('═══════════════════════════════════════════════');
    console.log('');
    console.log('📍 SHARE THIS ADDRESS WITH YOUR FRIENDS:');
    console.log('');
    console.log(`   http://${localIP}:${PORT}`);
    console.log('');
    console.log('   👆 COPY THIS AND SEND IT TO EVERYONE! 👆');
    console.log('');
    console.log('═══════════════════════════════════════════════');
    console.log('');
    console.log(`✅ You (this computer): http://localhost:${PORT}`);
    console.log(`✅ Others on WiFi: http://${localIP}:${PORT}`);
    console.log('');
    console.log('🏆 Leaderboard is LIVE and shared!');
    console.log('');
    console.log('Press Ctrl+C to stop');
    console.log('═══════════════════════════════════════════════');
    console.log('');
});
