const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(require('cookie-parser')());
app.use(express.json());

app.use('/api/v1/auth', require('./controllers/auth'));
app.use('/api/v1/stocks', require('./controllers/stocks'));
app.use('/api/v1/data', require('./utils/utilities'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
