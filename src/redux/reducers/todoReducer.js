import * as type from '../../constants/actionTypes';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
  addTodo: [],
  addTodoSuccess: false,
  addTodoError: false,
};

export default function getTodos(state = initialState, action) {
  switch (action.type) {
    case type.GET_TODOS_REQUEST:
      console.log('GET_TODOS_REQUEST ==>> ', action);
      return {
        ...state,
        isLoading: true,
      };
    case type.GET_TODOS_SUCCESS:
      console.log('GET_TODOS_SUCCESS ==>> ', action);
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: action.response.data,
      };
    case type.GET_TODOS_FAILED:
      console.log('GET_TODOS_FAILED ==>> ', action);
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.message,
      };

    case type.ADD_TODO_REQUEST:
      console.log('ADD_TODO_REQUEST ==>> ', action);
      return {
        ...state,
        isLoading: true,
      };
    case type.ADD_TODO_SUCCESS:
      console.log('ADD_TODO_SUCCESS ==>> ', action);
      return {
        ...state,
        isLoading: false,
        addTodoSuccess: true,
        addTodo: action.response.data,
      };
    case type.ADD_TODO_FAILED:
      console.log('ADD_TODO_FAILED ==>> ', action);
      return {
        ...state,
        isLoading: false,
        addTodoError: true,
        errorMsg: action,
      };
    default:
      return state;
  }
}
