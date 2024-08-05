import createApp from './app'; 

function createServerApp () {
  console.log('here in entry server');
  const app = createApp();
  
  // we can choose active route here, some async ops to get data, etc...

  return app;
}

export default createServerApp;
