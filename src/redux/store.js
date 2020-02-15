import { createStore } from 'redux'
import { combineReducers } from 'redux'
import emprestimoReducer from './reducers'

const store = createStore(
    combineReducers(
        {
            emprestimo: emprestimoReducer
        }
    )
)

export default store