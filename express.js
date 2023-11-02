const express = require('express');
const app = express();
const port = 3000;
const movieRoutes = require('./routes/movieRoutes');
app.use('/movies', movieRoutes);
