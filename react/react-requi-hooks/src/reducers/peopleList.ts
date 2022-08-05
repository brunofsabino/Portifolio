import { useReducer } from 'react'
import { Person, ActionType } from '../types/Reducer'
import { v4  as uuidv4} from 'uuid'
import { application } from 'express'



const initialState: Person[] = []

const reducer = (state: Person[], action: ActionType) => {
    switch(action.type) {
        case 'ADD':
            if(action.payload?.name) {
                const newState = [...state]
                newState.push({
                    id: uuidv4(),
                    name: action.payload?.name
                })
                return newState
            }
        case 'DEL':
            if(action.payload?.id) {
                let newState = [...state]
                newState = newState.filter(item => item.id !== action.payload?.id)
                return newState
            }
        case 'ORDER':
            let newState = [...state]
            newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1)
            return newState
    }
    return state
}

export const usePeopleList = () => {
    return useReducer(reducer, initialState)
}