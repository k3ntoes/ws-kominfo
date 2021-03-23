const express = require('express');
const app = express();
const port = 1234;

const mainRoutes = require('./controllers/routes');

// Static Files
app.use('/assets', express.static('public'));

//Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(mainRoutes);

app.listen(port, () => console.log(`App started on port ${port}`));
