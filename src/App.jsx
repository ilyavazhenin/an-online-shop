import App from './components/App.jsx';
import createRootStore from './store/index.js';
import storeContext from './context/store.js';
import createHttpPlugin from './plugins/http.js';
import createApi from './api/index.js';

async function createApp() {
  const http = createHttpPlugin('https://fakestoreapi.com/');
  const api = createApi(http);
	const rootStore = createRootStore(api);

	// http.interceptors.request.use((config) => {
	// 	console.log('config in interceptor', 1);
	// 	return config;
	// });

	// api.products.getAll();

	await rootStore.catalog.load();

	const app = (
		<storeContext.Provider value={rootStore}>
			<App />
		</storeContext.Provider>
	);
	return app;
}

export default createApp;

// import http from './plugins/http.js';
// import rootStore from './store/index.js';

// http.interceptors.response.use(r => r, e => {
//   rootStore.push();
// });
