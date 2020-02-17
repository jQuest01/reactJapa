import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Situacao from './situacao'
import { bindActionCreators } from 'redux';
import { getPrestacao } from '../redux/actions'
import Paper from '@material-ui/core/Paper';
import { TableContainer } from '@material-ui/core';


const Prestacoes = (props) => {

    const [prestacoes, setPrestacoes] = useState([])

    useEffect(() => {
        axios.get(props.url).then(res => {
            let data = res.data
            let prestacoes = data.installments
            setPrestacoes(prestacoes);
        })

    }, [props.url])
    const StyledTableCell = withStyles(theme => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
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
        <div style={{width: "80%", float: "right"}}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Valor</StyledTableCell>
                            <StyledTableCell align="center">Situação</StyledTableCell>
                            <StyledTableCell align="center">Vencimento</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prestacoes.map((p, idx) => (
                            <StyledTableRow key={idx}>
                                < StyledTableCell align="center"> {p.formatedValue}</StyledTableCell>
                                < StyledTableCell align="center"> <Situacao situacao={p.payd}></Situacao></StyledTableCell>
                                < StyledTableCell align="center"> {p.dueDate}</StyledTableCell>
                            </StyledTableRow>

                        ))}
                    </TableBody>
                </Table >
            </TableContainer>
        </div>
    )
}

const mapstateToProps = state => ({
    url: state.prestacao.url
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getPrestacao }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(Prestacoes)