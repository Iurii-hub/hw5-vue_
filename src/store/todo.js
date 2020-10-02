import {state} from "./todos/state";
import {actions} from "./todos/actions";
import {getters} from "./todos/getters";
import {mutations} from "./todos/mutations";

const namespaced=true;

export const TodoModule='Todo';

  export const Todo={
    namespaced,
    state,
    actions,
    getters,
    mutations,
}