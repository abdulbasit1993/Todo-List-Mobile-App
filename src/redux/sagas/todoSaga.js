import {call, put, takeEvery} from 'redux-saga/effects';
import * as type from '../../constants/actionTypes';
import {getCall, postCall} from '../../services/apiService';

async function getTodos() {
  return await getCall('/todos/getAllTodos')
    .then(response => response)
    .catch(error => {
      throw error;
    });
}

async function createTodo(data) {
  console.log('createTodo [todoSaga] data ===>> ', data);
  return await postCall('/todos/add', data)
    .then(response => response)
    .catch(error => {
      throw error;
    });
}

function* fetchTodosWorker() {
  try {
    const todos = yield call(getTodos);
    yield put({type: type.GET_TODOS_SUCCESS, response: todos});
  } catch (e) {
    yield put({type: type.GET_TODOS_FAILED, message: e.message});
  }
}

export function* fetchTodosWatcher() {
  yield takeEvery(type.GET_TODOS_REQUEST, fetchTodosWorker);
}

function* addTodoWorker(action) {
  console.log('addTodoWorker action', action);
  try {
    const todos = yield call(createTodo, action.data);
    yield put({type: type.ADD_TODO_SUCCESS, response: todos});
  } catch (e) {
    yield put({type: type.ADD_TODO_FAILED, message: e.message});
  }
}

export function* addTodoWatcher() {
  yield takeEvery(type.ADD_TODO_REQUEST, addTodoWorker);
}
