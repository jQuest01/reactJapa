import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { getAllData } from '../redux/actions'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import logo from '../imgs/logo.png';


const Cabecalho = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(props.url).then(res => {
            let data = res.data
            setData(data)
        })
    }, [props.url])

    const style = {
        table: {
            align: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
        },
        img: {
            width: "200px",
            marginRight: "auto",
            marginLeft: "auto",
        }
    }
    return (
        <div>
            <div>
                <img src={logo} alt="logo" style={style.img} class="center" />
            </div>
            <div>
                <Breadcrumbs style={style.table}>
                    <Typography color="textPrimary">
                        <span align="center"><strong>Valor Pago R$ {data.amountPayd},00</strong></span>
                    </Typography>
                    <Typography color="textPrimary">
                        <span align="center"><strong>Juros Mensais {data.monthlyInterest}%</strong></span>
                    </Typography>
                    <Typography color="textPrimary">
                        <span align="center"><strong>Total a Pagar: R$ {data.amountTaken + data.totalAmountInTaxes},00</strong></span>
                    </Typography>
                    <Typography color="textPrimary">
                        <span align="center"><strong>Total de Juros {` R$ ${data.totalAmountInTaxes},00`}</strong></span>
                    </Typography>
                </Breadcrumbs>
            </div>
        </div>
    )
}

const mapstateToProps = state => ({
    url: state.prestacao.url
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllData }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(Cabecalho)