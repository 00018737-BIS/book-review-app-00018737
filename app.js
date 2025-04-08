require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator'); // Add this
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');

app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});