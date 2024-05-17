// server.js
const express = require('express');
const connectDB = require('../database/config/db');
const router = require('./router');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', router);
app.listen(4000, () => console.log('Server running on port 4000'));