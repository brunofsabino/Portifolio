import { useReducer } from 'react'
import { reducerState, reducerAction } from '../types/Reducer'


const initialState = { count: 0 }

const reducer = (state: reducerState, action: reducerAction) => {
    switch(action.type) {
    case 'ADD':
        return {... state, count: state.count + 1}
    case 'DEL':
        if(state.count > 0) {
        return {... state, count: state.count - 1}
        }  
    case 'RESET':
        return initialState
    }
    return state
}

export const useContagem = () => {
    return useReducer(reducer, initialState)
}