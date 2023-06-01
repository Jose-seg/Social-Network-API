// Package Import
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Initializing Express app
const app = express();

// Middleware for parsing JSON and the urlencoded form data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Handling the API routes
app.use(routes);

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Logs message when successfully connected to MongoDB
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

// Starts the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🖥️ Connected on localhost:${PORT}`));