import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { getAllData } from '../redux/actions'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableContainer } from '@material-ui/core';

const Cabecalho = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(props.url).then(res => {
            let data = res.data
            setData(data)
        })
    }, [])
    const StyledTableCell = withStyles(theme => ({
        head: {
            backgroundColor: theme.palette.common.default,
            color: theme.palette.common.black,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles(theme => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table style={{float: "left", width: "30%"}} className={classes.table} aria-label="simple table">
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell align="left">Valor Pago</StyledTableCell>
                        <StyledTableCell align="right">R$ {data.amountPayd},00</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="left">Juros Mensais</StyledTableCell>
                        < StyledTableCell align="right">{data.monthlyInterest}%</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="left">Total a Pagar</StyledTableCell>
                        < StyledTableCell align="right">R$ {data.amountTaken + data.totalAmountInTaxes},00</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="left">Total de Juros</StyledTableCell>
                        < StyledTableCell align="right">R$ {data.totalAmountInTaxes},00</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table >
        </TableContainer>
    )
}

const mapstateToProps = state => ({
    url: state.emprestimo.url
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllData }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(Cabecalho)