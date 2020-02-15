import axios from 'axios'

export function getEmprestimos() {
    let url = 'http://www.mocky.io/v2/5c923b0932000029056bce39'

    let content = []

    axios.get(url).then(res=>{
        let data = res.data
        let emprestimos = data.installments
        console.log(emprestimos)
        content = emprestimos
    })

    return {
        type: 'GET_EMPRESTIMOS',
        payload: content
    }
}

export function getUserData(){
    let url = 'http://www.mocky.io/v2/5c923b0932000029056bce39'

    let content = []

    axios.get(url).then(res=>{
        let data = res.data
        let userdata = data.installments
        content = userdata
    })

    return {
        type: 'GET_USERDATA',
        payload: content
    }
}