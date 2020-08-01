import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './main-styles.css';

export default class Main extends Component {
	// ARMAZENAR ESTADO DO COMPONENTE
	state = {
		products: [],
		productInfo: {},
		currentPage: 1
	}

	// PARA FUNÇÕES DO REACT NÃO PRECISA ARROW FUNCTION
	componentDidMount() {
		this.loadProducts();
	}

	// FEITO DESTA FORMA POIS NÃO SOBRESCREVE O VALOR DO THIS
	loadProducts = async(page = 1) => {
		const response = await api.get(`/products?page=${page}`);
		const { docs, ...productInfo} = response.data;
		this.setState({ products: docs, productInfo, currentPage: page });
	}

	prevPage = () => {
		const { currentPage } = this.state;
		// VERIFICAR SE ESTÁ NA PRIMEIRA PAGINA
		if (currentPage === 1) return;
		const pageNumber = currentPage - 1;
		this.loadProducts(pageNumber);
	}

	nextPage = () => {
		const { currentPage, productInfo } = this.state;
		// VERIFICAR SE ESTÁ NA ULTIMA PAGINA
		if (currentPage === productInfo.pages) return;
		const pageNumber = currentPage + 1;
		this.loadProducts(pageNumber);
	}

	render() {
		// BUSCA A VARIAVEL PRODUCTS DENTRO DO STATE
		const { products, currentPage } = this.state;
		const { pages } = this.state.productInfo;
		return (
			<div className="product-list">
				{ products.map(product => (
					<article key={ product._id }>
						<strong>{ product.title }</strong>
						<p>{ product.description }</p>
						<Link to={`/products/${product._id}`}>Acessar</Link>
					</article>
				))}
			<div className="actions">
					<button disabled={ currentPage === 1} onClick={ this.prevPage }>Anterior</button>
					<button disabled={ currentPage === pages} onClick={ this.nextPage }>Próximo</button>
			</div>
			</div>
		)
	}
}