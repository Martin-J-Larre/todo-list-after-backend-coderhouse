const express = require('express');
const cors = require('cors');
let app = express();
const PORT = 3050;

app.use(cors('*'));

app.get("/", (req, res) => {
    res.json(false);
});
app.get("/todo/list", (req, res) => {});
app.get("/todo/summarylist", (req, res) => {});
app.get("/todo/", (req, res) => {});
app.put("/todo", (req, res) => {});
app.delete("/todo", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Servidor funcionando correctamente! ${PORT}`);
});