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

export function deleteTodo(data) {
  return {
    type: type.DELETE_TODO_REQUEST,
    data: data,
  };
}

export function updateTodo(data, id) {
  return {
    type: type.UPDATE_TODO_REQUEST,
    data: data,
    id: id,
  };
}
