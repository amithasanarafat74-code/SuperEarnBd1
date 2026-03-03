const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Database connection (MongoDB URI পরে এড করবেন)
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);

// Static files সেট আপ (HTML, CSS, JS ফাইলগুলো 'public' ফোল্ডারে থাকবে)
app.use(express.static('public'));

// যেকোনো URL হিট করলে index.html দেখাবে
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// সার্ভার চালু
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});