export type reducerState = {
    count: number,
}
export type reducerAction = {
   type: string
}

export type Person = {
    id: string,
    name: string
}

export type ActionType = {
    type: string,
    payload?: {
        name?: string,
        id?: string
    }
}