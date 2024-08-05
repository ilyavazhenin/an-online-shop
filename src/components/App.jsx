import { observer } from 'mobx-react';
import { useState } from 'react';
import rootStore from '../store';

function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>Hello React Vite Mobx Shop!</h1>
      <h2>{counter}</h2>
      <button type="button" onClick={() => setCounter(counter + 1)}>Add 1</button>
      <hr />
      {rootStore.user.id}
		</div>
	);
}

const observedApp = observer(App);

export default App;
