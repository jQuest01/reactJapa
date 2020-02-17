import React from 'react'

const Situacao = (props) => {
    if (props.situacao === true) {
        return <h3>Pago</h3>
    } else {
        return <h3>Pendente</h3>
    }
}

export default Situacao;