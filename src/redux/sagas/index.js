import {all} from 'redux-saga/effects';
import {fetchTodosWatcher} from './todoSaga';
import {addTodoWatcher} from './todoSaga';

export default function* rootSaga() {
  yield all([fetchTodosWatcher(), addTodoWatcher()]);
}
