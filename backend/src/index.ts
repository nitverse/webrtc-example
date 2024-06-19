import { WebSocketServer } from "ws";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/status" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("WebSocket server is running\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  }
});


const wss = new WebSocketServer({ server });

let senderSocket: null | WebSocket = null;
let recieverSocket: null | WebSocket = null;

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data: any) {
    const message = JSON.parse(data);
    console.log(message);
  });

  ws.send("something");
});

const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
