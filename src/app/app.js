
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
