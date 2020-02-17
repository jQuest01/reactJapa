import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { getAllData } from '../redux/actions'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import cyan from '@material-ui/core/colors/cyan';
import logo from '../imgs/logo.png';


const LadoEsq = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(props.url).then(res => {
            let data = res.data
            setData(data)
        })
    }, [props.url])

    const style = {
        table: {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
            padding: "0"
        },
        div: {
            height: "870px",
            width: "20%",
            backgroundColor: cyan[300],
            float: "left"
        }
    }
    return (
        <div style={style.div}>
            
            <Breadcrumbs style={style.table}>
                <Typography color="textPrimary">
                    <span align="left"><strong>Valor Pago R$ {data.amountPayd},00</strong></span>
                </Typography>
                <Typography color="textPrimary">
                    <span align="left"><strong>Juros Mensais {data.monthlyInterest}%</strong></span>
                </Typography>
                <Typography color="textPrimary">
                    <span align="left"><strong>Total a Pagar: R$ {data.amountTaken + data.totalAmountInTaxes},00</strong></span>
                </Typography>
                <Typography color="textPrimary">
                    <span align="left"><strong>Total de Juros {` R$ ${data.totalAmountInTaxes},00`}</strong></span>
                </Typography>
            </Breadcrumbs>
        </div>
    )
}

const mapstateToProps = state => ({
    url: state.prestacao.url
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllData }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(LadoEsq)