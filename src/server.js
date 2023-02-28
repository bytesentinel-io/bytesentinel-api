const express = require("express");
const http = require("http");
const https = require("https");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes");

const NODE = (process.env.NODE_ENV || "dev").toLowerCase();

const app = express();

var server;

if (NODE !== "production" || NODE !== "prd") {
    server = http.createServer(app);
} else {
    server = https.createServer(app);
}

app.use(morgan("dev"));

app.use("/", routes.main);

const start = async (ip, port) => {
    await server.listen(port, ip, async () => {
        console.log(`[${NODE.toUpperCase()}] Server is running...`);
        console.log(`http://${ip}:${port}`);
    })
}

module.exports = {
    app,
    server,
    start
}