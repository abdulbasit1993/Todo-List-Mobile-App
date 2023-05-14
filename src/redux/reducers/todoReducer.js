import * as type from '../../constants/actionTypes';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
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
    default:
      return state;
  }
}
