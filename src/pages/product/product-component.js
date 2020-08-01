import React, { Component } from 'react';
import api from '../../services/api'
import './product-styles.css'

export default class Product extends Component {
	state = {
		product: {}
	};

	async componentDidMount() {
		// ACESSAR PARAMETROS DA ROTA
		const { id } = this.props.match.params;
		const response = await api.get(`/products/${id}`);

		this.setState({ product: response.data });
		console.log(this.props);
	}

	previousPage = () => {
		const { history } = this.props
		history.goBack();
	}

	render() {
		const { product } = this.state;

		return (
			<div className="product-info">
				<h1>{ product.title }</h1>
				<p>{ product.description }</p>

				<p>
					URL: <a href={ product.url }>{ product.url}</a>
				</p>
				<button onClick={ this.previousPage } >Voltar</button>
			</div>

		)
	}
}