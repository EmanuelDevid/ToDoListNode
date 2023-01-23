const express = require("express");
const app = express();

//rota
app.get("/home", (req, res) => {
    res.send("Hello World");
});

app.listen(3000);
