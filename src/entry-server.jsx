import createApp from './app'; 

function createServerApp () {
  const app = createApp();
  console.log('here in entry server');
  
  // we can choose active route here, some async ops to get data, etc...

  return app;
}

export default createServerApp;
