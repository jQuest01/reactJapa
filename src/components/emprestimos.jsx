import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Situacao from './situacao'
import { bindActionCreators } from 'redux';
import { getEmprestimos } from '../redux/actions'


const Emprestimos = (props) => {

    const [emprestimos, setEMprestimos] = useState([])

    useEffect(() => {
        props.getEmprestimos();
        setEMprestimos(props.emprestimos);
        console.log(emprestimos)
    }, [])

    return (

        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>valor</TableCell>
                    <TableCell align="right">Situação</TableCell>
                    <TableCell align="right">vencimento</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}

const mapstateToProps = state => ({
    emprestimos: state.emprestimo
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getEmprestimos }, dispatch)
}

export default connect(mapstateToProps, mapDispatchToProps)(Emprestimos)