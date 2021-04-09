const express = require("express");
require("dotenv/config");

const app = express();

app.get('/', (req, res) => {
    res.send('Hey There');
})
app.listen(process.env.PORT || 3000, () => {
    console.log("server runing! ", process.env.PORT);
});