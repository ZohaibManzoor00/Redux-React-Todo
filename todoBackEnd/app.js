//import
const express = require('express');
const cors = require('cors');

//start up server
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//configure port
const PORT = process.env.PORT || 8000;

//listen to port
app.listen(PORT, () => {
    console.log('listening on port 8000');
});