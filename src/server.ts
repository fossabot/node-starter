import errorhandler from 'errorhandler';
import { Socket, Server as SocketIOServer } from 'socket.io';
import logger from './util/logger';
import app from './app';
import { ChatData } from './types/socket/chat';

app.use(errorhandler());

const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});
const io = new SocketIOServer(server, {
  path: '/socketio'
});
io.on('connection', (socket: Socket) => {
  logger.debug(`socket connected: ${socket.id}`);
  socket.on('disconnect', () => {
    logger.debug(`socket disconnected: ${socket.id}`);
  });
  socket.on('join', (roomID: string) => {
    socket.join(roomID);
  });
  socket.on('chat', (data: ChatData) => {
    const { roomID, message } = data;
    logger.debug(`msg: ${message}, roomID: ${roomID}`);
    io.to(roomID).emit('chat', message);
  });
});

export default server;

//https://alligator.io/workflow/
//https://egghead.io/lessons/typescript-create-high-quality-npm-packages-using-typescript
//https://levelup.gitconnected.com/create-a-npm-module-with-typescript-c99bd0686f69
//https://levelup.gitconnected.com/create-a-react-component-library-with-typescript-and-storybook-ed28fc7511f2
//https://medium.com/better-programming/how-to-setup-continuous-integration-ci-with-react-circleci-and-github-e0efd5040b03
//https://alligator.io/workflow/continuous-integration-with-circleci/
//https://www.freecodecamp.org/news/how-to-set-up-continuous-integration-and-deployment-for-your-react-app-d09ae4525250/
//https://stackoverflow.com/questions/34559557/how-to-enable-authentication-on-mongodb-through-docker
