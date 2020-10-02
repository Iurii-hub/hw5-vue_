import Vue from 'vue'
import Vuex from 'vuex'
import {todolist, todoModule} from "@/store/todos/todos";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    [todoModule]: todolist
  }
})


// // //NEW
// import {Todo,TodoModule} from "./todos";


//     //NEW
//     //     modules:{
//     //       [TodoModule]:Todo
//     //     }
//     //   }


//     //OLD
//     // state: {
//     //     arrayToDo : [], 
//     // },


//     // mutations: {
//     //     setTodo: (state, todo) => {
//     //         state.todo = todo;
//     //     }

//     // },


// // })



