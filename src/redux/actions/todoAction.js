import * as type from '../../constants/actionTypes';

export function getTodos() {
  return {
    type: type.GET_TODOS_REQUEST,
  };
}

export function addTodo(data) {
  return {
    type: type.ADD_TODO_REQUEST,
    data: data,
  };
}
