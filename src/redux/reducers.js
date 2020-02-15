const iNITIAL_STATE = {
    userData: {

    },
    emprestimos: []
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

        default:
            return { ...state }
    }
}