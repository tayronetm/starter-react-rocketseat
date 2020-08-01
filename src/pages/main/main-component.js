import React, { Component } from 'react';
import api from '../../services/api'

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
		return (
			<div className="product-list">
				{this.state.products.map(product => (
					<h2 key={product._id}>{ product.title }</h2>
				))}
			</div>
		)
	}
}