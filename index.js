const express = require("express");
const app = express();
const fs = require("fs");
const data=new Date().toString();
const port = 4000;

const createFile = () => {
    fs.writeFileSync("date-time.txt", data);
}

const readFile = () => {
    let data = fs.readFileSync("date-time.txt", "utf8");
    return data;
}

app.get("/createfile", (req, res) => {
    createFile();
    res.send("file created");
})

app.get("/readfile", (req, res) => {
    let result = readFile();
    res.send(result);
})
app.listen(port, () => {
    console.log("Server is listening at", port);
});