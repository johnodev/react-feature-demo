
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
export default createStore(combineReducers({app: reducer}), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);