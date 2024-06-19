"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/status" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("WebSocket server is running\n");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found\n");
    }
});
const wss = new ws_1.WebSocketServer({ server });
let senderSocket = null;
let recieverSocket = null;
wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        const message = JSON.parse(data);
        console.log(message);
    });
    ws.send("something");
});
const PORT = 6969;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
