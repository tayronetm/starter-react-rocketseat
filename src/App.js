import React from 'react';
import Header from './components/header/header-component';
import Routes from './routes'
import './styles.css';

// STATELESS COMPONENT
const App = () => (
	<div className="App">
		<Header />
		<Routes />
	</div>
);

export default App;
