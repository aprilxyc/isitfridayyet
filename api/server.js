const express = require('express');
const cors = require('cors';)
const app = express();

const port = process.env.PORT || 9000;

const testAPIRouter = require('./routes/testAPI');

app.use(cors());

// GET route that will be used to fetch from react
app.get('/', (req, res) => {
    res.send('hello world!');
})

app.use('/testAPI', testAPIRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
