const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const aylien = require("aylien_textapi");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.post('/analyze', (req, res) => {
    const { url } = req.body;
    textapi.sentiment({ url }, (error, response) => {
        if (error) return res.status(500).json({ error: 'API call failed' });
        res.json(response);
    });
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

