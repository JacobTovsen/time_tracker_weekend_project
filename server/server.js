const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = require('./routes/router');

const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/router', router);

app.listen(PORT, () => {
    console.log('server listening on port:', PORT );
});
