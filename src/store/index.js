import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware  from 'redux-saga'

import GameReducer from './reducers'
import gameSaga from './sagas'


const SagaMiddleware = createSagaMiddleware()

const store = createStore(GameReducer, composeWithDevTools(applyMiddleware(SagaMiddleware)))

SagaMiddleware.run(gameSaga)
export default store 