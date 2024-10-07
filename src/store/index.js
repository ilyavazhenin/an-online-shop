import User from './user';
import Catalog from './catalog';

function createRootStore(api) {
	const rootStore = {
		user: new User(),
		catalog: new Catalog(api.products)
	};

	return rootStore;
}

export default createRootStore;
