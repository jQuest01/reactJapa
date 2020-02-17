const iNITIAL_STATE = {
    userData: {
    },
    emprestimos: [],
    url: 'http://www.mocky.io/v2/5c923b0932000029056bce39'
}

export default function (state = iNITIAL_STATE, action) {

    switch (action.type) {
        case 'GET_USERDATA':
            return {
                ...state, useData: action.payload
            }

        case 'GET_EMPRESTIMOS':
            return {
                ...state, emprestimos: action.payload
            }

        case 'GET_ALLDATA':
            return {
                ...state, userData: action.payload
            }

        default:
            return { ...state }
    }
}