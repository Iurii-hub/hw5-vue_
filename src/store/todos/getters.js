import {GET_TODO} from "./types"

export const getters = {
    [GET_TODO]: state => {
        return state.todos
    }
}