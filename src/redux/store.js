import { createStore } from 'redux'
import { combineReducers } from 'redux'
import prestacaoReducer from './reducers'

const store = createStore(
    combineReducers(
        {
            prestacao: prestacaoReducer
        }
    )
)

export default store