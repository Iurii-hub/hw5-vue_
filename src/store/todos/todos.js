import {state} from "@/store/todos/state";
import {actions} from "@/store/todos/actions";
import {getters} from "@/store/todos/getters";
import {mutations} from "@/store/todos/mutations";

const namespaced = true;

export const todoModule = 'todolist';

export const todolist = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
}