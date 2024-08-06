import { observer } from 'mobx-react';
import { useContext, useState } from 'react';
import storeContext from '../context/store';

function App() {
	const [counter, setCounter] = useState(0);
	const store = useContext(storeContext);

	return (
		<div>
			<h1>Hello React Vite Mobx Shop!</h1>
			<h2>{counter}</h2>
			<button
				type="button"
				onClick={() => setCounter(counter + 1)}
			>
				Add 1
			</button>
			<hr />
			{store.user.id}
		</div>
	);
}

const observedApp = observer(App);

export default App;
