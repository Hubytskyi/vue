const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRouters'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));