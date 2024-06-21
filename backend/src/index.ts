import { WebSocketServer, WebSocket } from "ws";
import express from "express";
import http from "http";

const app = express();

app.get("/status", (req, res) => {
  res.status(200).send("WebSocket server is running\n");
});

app.use((req, res) => {
  res.status(404).send("Not Found\n");
});

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

let senderSocket: WebSocket | null = null;
let receiverSocket: WebSocket | null = null;

wss.on("connection", (ws: WebSocket) => {
  ws.on("error", console.error);

  ws.on("message", (data: string) => {
    const message = JSON.parse(data);
    console.log(message);
  });

  ws.send("something");
});

const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
