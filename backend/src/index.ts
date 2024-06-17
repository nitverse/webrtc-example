import { WebSocketServer } from "ws";
import http from 'http'

const server = http.createServer();
const wss = new WebSocketServer({ server });

let senderSocket: null | WebSocket = null;
let recieverSocket: null | WebSocket = null;

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data: any) {
        const message = JSON.parse(data);
     //   console.log(message);
        
    });

    ws.send('something');
})

server.listen(6969);
