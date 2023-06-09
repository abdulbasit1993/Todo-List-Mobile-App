import {all} from 'redux-saga/effects';
import {fetchTodosWatcher} from './todoSaga';
import {addTodoWatcher} from './todoSaga';
import {deleteTodoWatcher} from './todoSaga';
import {updateTodoWatcher} from './todoSaga';

export default function* rootSaga() {
  yield all([
    fetchTodosWatcher(),
    addTodoWatcher(),
    deleteTodoWatcher(),
    updateTodoWatcher(),
  ]);
}
