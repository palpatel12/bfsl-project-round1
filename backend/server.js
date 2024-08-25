const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userId = 'Pal';  // Change as per your requirement
const email = 'pal12052003@gmail.com';
const rollNumber = '21BCE2603';

// POST Endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                message: 'Invalid data format'
            });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));

        const lowercaseAlphabets = alphabets.filter(item => item >= 'a' && item <= 'z');
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
            ? [lowercaseAlphabets.sort().slice(-1)[0]] 
            : [];

        return res.json({
            is_success: true,
            user_id: userId,
            email,
            roll_number: rollNumber,
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        });
    } catch (error) {
        return res.status(500).json({
            is_success: false,
            message: 'Server Error'
        });
    }
});

// GET Endpoint
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
