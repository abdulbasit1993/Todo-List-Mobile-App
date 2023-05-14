import {call, put, takeEvery} from 'redux-saga/effects';
import {getCall} from '../../services/apiService';

function getTodos() {
  return getCall('/todos/getAllTodos')
    .then(response => response)
    .catch(error => {
      throw error;
    });
}

function* fetchTodosWorker(action) {
  try {
    const todos = yield call(getTodos);
    yield put({type: 'GET_TODOS_SUCCESS', response: todos});
  } catch (e) {
    yield put({type: 'GET_TODOS_FAILED', message: e.message});
  }
}

function* fetchTodosWatcher() {
  yield takeEvery('GET_TODOS_REQUEST', fetchTodosWorker);
}

export default fetchTodosWatcher;
