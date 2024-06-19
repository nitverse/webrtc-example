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

<<<<<<< HEAD
    ws.on('message', function message(data: any) {
        const message = JSON.parse(data);
     //   console.log(message);
        
    });
=======
  ws.on("message", function message(data: any) {
    const message = JSON.parse(data);
    console.log(message);
  });
>>>>>>> e553265 (Created http server to verify the status of websocket)

  ws.send("something");
});

<<<<<<< HEAD
server.listen(6969);
=======
const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
>>>>>>> e553265 (Created http server to verify the status of websocket)
