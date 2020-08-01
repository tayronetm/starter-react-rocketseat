import React, { Component } from 'react';
import api from '../../services/api'

export default class Main extends Component {

	// PARA FUNÇÕES DO REACT NÃO PRECISA ARROW FUNCTION
	componentDidMount() {
		this.loadProducts();
	}

	// FEITO DESTA FORMA POIS NÃO SOBRESCREVE O VALOR DO THIS
	loadProducts = async() => {
		const response = await api.get('/products');
		console.log(response.data.docs);
	}

	render() {
		return <h1>Hello</h1>;
	}
}