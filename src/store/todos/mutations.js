import {ADD_TODO, REMOVE_TODO} from "./types"

export const mutations = {
    [ADD_TODO]: (state, value) => {
        state.todos.push({...value, id: state.todos.length, isShow: false})
    },
    [REMOVE_TODO]: (state, id) => {
        let index = state.todos.findIndex(el => el.id == id)
        state.todos.splice(index, 1)
    },
    
}