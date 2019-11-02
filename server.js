const express = require('express');
// initialize app with express
const app = express();
// test
app.get('/', (req, res) => res.send('API running'));
// initialize PORT
const PORT = process.env.PORT || 5000;
// listen the app to PORT
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
