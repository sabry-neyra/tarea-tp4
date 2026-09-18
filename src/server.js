const express = require("express");
const { moveHandler } = require("./handler");
const app = express();

app.use(express.json());

app.post("/move", moveHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});