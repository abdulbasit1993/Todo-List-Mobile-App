import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from '../redux/sagas/index';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleware, logger))(createStore)(
  rootReducer,
);

sagaMiddleware.run(rootSaga);

export default store;
