import * as type from '../../constants/actionTypes';

export function getTodos() {
  return {
    type: type.GET_TODOS_REQUEST,
  };
}
