var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')()

io.listen(server)

server.listen(process.env.PORT || 3000);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});


io.sockets.on('connection', function (socket) {

   console.log("Socket connected.");

   socket.on('message', function(msg){
     io.emit('message', msg);
   });
  
});