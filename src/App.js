import React from 'react';
import Header from './components/header/header-component';
import './styles.css';
import Main from './pages/main/main-component'

// STATELESS COMPONENT
const App = () => (
	<div className="App">
		<Header />
		<Main />
	</div>
);

export default App;
