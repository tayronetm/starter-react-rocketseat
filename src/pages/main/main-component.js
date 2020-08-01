import React, { Component } from 'react';
import api from '../../services/api';

import './main-styles.css';

export default class Main extends Component {
	// ARMAZENAR ESTADO DO COMPONENTE
	state = {
		products: []
	}

	// PARA FUNÇÕES DO REACT NÃO PRECISA ARROW FUNCTION
	componentDidMount() {
		this.loadProducts();
	}

	// FEITO DESTA FORMA POIS NÃO SOBRESCREVE O VALOR DO THIS
	loadProducts = async() => {
		const response = await api.get('/products');
		this.setState({ products: response.data.docs })
	}

	render() {
		// BUSCA A VARIAVEL PRODUCTS DENTRO DO STATE
		const { products } = this.state;
		return (
			<div className="product-list">
				{ products.map(product => (
					<article key={ product._id }>
						<strong>{ product.title }</strong>
						<p>{ product.description }</p>
						<a href={ product.url }>Acessar</a>
					</article>
				))}
			</div>
		)
	}
}