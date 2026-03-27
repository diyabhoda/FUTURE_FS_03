const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;

app.use(express.static('public')); // Put your HTML/CSS/JS in a folder named 'public'

app.get('/api/parts', (req, res) => {
    res.json([
        { name: "Turbo Sparkles", price: "$200" },
        { name: "Kawaii Brake Pads", price: "$85" }
    ]);
});

app.listen(PORT, () => {
    console.log(`BP Auto Server running at http://localhost:${PORT}`);
});