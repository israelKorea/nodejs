module.export = (io) {
  io.on('connection', (socket) => {
    console.log('socket initiated!');
    socket.on('newScoreToServer', (data) => {
     console.log('socket : newScore');
     io.emit('newScoreToclient', data);
    });
  });
};
