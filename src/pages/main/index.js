import React, { Component } from 'react'
import api from '../../services/api.js'

export default class Main extends Component {
    state = {
        installment: []
    }
    componentDidMount() {
        this.loadProducts()
    }
    loadProducts = async () => {
        const response = await api.get('/value')
        this.setState({
            ID: response.data.UserId,
            installment: response.data.installments,
            Tidt: response.data.installments[0].value
        })
        console.log(response.data.installments)
        console.log(response.data.installments[0].payd)
        console.log(response.data.installments[0].value)
    }
    render() {
        return (
            <div className="container">
                <p>ID: {this.state.ID}</p>
                <p>Quantidade de Prestações: {this.state.installment.length}</p>
                <p>Valor: {this.state.Tidt}</p>
            </div>)
    }
}