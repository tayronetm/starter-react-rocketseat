import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/main-component';
import Product from './pages/product/product-component';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{/* // SE O REACT IDENTIFICAR QUE O PATH INICIA NA "/" ELE PARA */}
			{/* // E NÃO VERIFICA AS DEMAIS ROTAS PARA ISSO UTILIZA O EXACT*/}
			<Route exact path="/" component={Main} />
			<Route path="/products/:id" component={Product} />
		</Switch>
	</BrowserRouter>
)

export default Routes;