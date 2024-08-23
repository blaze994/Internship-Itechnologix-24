import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';


const wss = new WebSocketServer({ port: 5000 });

const gameManger = new GameManager();

wss.on('connection', function connection(ws) {
  
  gameManger.addUser(ws)
  ws.on("disconnect",()=> gameManger.removeUser(ws));
  
});