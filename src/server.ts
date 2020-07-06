import errorhandler from 'errorhandler';

import app from './app';

app.use(errorhandler());

const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;

//https://cloudnweb.dev/2019/09/building-a-production-ready-node-js-app-with-typescript-and-docker/
//https://dev.to/nyagarcia/pokeapi-rest-in-nodejs-with-express-typescript-mongodb-and-docker-part-1-5f8g
//https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose
//https://alligator.io/workflow/
//https://egghead.io/lessons/typescript-create-high-quality-npm-packages-using-typescript
//https://levelup.gitconnected.com/create-a-npm-module-with-typescript-c99bd0686f69
//https://levelup.gitconnected.com/create-a-react-component-library-with-typescript-and-storybook-ed28fc7511f2
//https://medium.com/better-programming/how-to-setup-continuous-integration-ci-with-react-circleci-and-github-e0efd5040b03
//https://alligator.io/workflow/continuous-integration-with-circleci/
//https://www.freecodecamp.org/news/how-to-set-up-continuous-integration-and-deployment-for-your-react-app-d09ae4525250/
