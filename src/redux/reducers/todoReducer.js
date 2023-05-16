import * as type from '../../constants/actionTypes';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
  addTodo: [],
  addTodoSuccess: false,
  addTodoError: false,
  deleteTodoSuccess: false,
  deleteTodoError: false,
  deleteTodo: [],
  updateTodoSuccess: false,
  updateTodoError: false,
  updateTodo: [],
};

export default function getTodos(state = initialState, action) {
  switch (action.type) {
    case type.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.response.data,
      };
    case type.GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.message,
      };

    case type.ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addTodoSuccess: true,
        addTodo: action.response.data,
      };
    case type.ADD_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        addTodoError: true,
        errorMsg: action,
      };

    case type.DELETE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.DELETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteTodoSuccess: true,
        deleteTodo: action,
      };
    case type.DELETE_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        deleteTodoError: true,
        errorMsg: action,
      };

    case type.UPDATE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case type.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateTodoSuccess: true,
        updateTodo: action,
      };
    case type.UPDATE_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        updateTodoError: true,
        errorMsg: action,
      };
    default:
      return state;
  }
}
