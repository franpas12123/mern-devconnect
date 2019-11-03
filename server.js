const express = require('express');
const connectDB = require('./config/db');

// initialize app with express
const app = express();

// connect to db
connectDB();

// test
app.get('/', (req, res) => res.send('API running'));

// define routes
// app.use(endpoint, file-containing-the-routes)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// initialize PORT
const PORT = process.env.PORT || 5000;
// listen the app to PORT
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
