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
import { getEmprestimos } from '../redux/actions'
import Paper from '@material-ui/core/Paper';
import { TableContainer } from '@material-ui/core';


const Emprestimos = (props) => {

    const [emprestimos, setEMprestimos] = useState([])

    useEffect(() => {
        axios.get(props.url).then(res => {
            let data = res.data
            let emprestimos = data.installments
            setEMprestimos(emprestimos);
            console.log(emprestimos.length * res.data.installments.value)
        })

    }, [])
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
        <TableContainer component={Paper}>
            <Table style={{float: "right", width:"70%"}}className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Valor</StyledTableCell>
                        <StyledTableCell align="center">Situação</StyledTableCell>
                        <StyledTableCell align="center">Vencimento</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {emprestimos.map((e, idx) => (
                        <StyledTableRow key={idx}>
                            < StyledTableCell align="center"> {e.formatedValue}</StyledTableCell>
                            < StyledTableCell align="center"> <Situacao situacao={e.payd}></Situacao></StyledTableCell>
                            < StyledTableCell align="center"> {e.dueDate}</StyledTableCell>
                        </StyledTableRow>

                    ))}
                </TableBody>
            </Table >
        </TableContainer>
    )
}

const mapstateToProps = state => ({
    url: state.emprestimo.url
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getEmprestimos }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(Emprestimos)