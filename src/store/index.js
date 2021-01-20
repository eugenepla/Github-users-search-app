
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from './root-reducer'
import createSagaMiddleware from 'redux-saga'
import { searchSaga } from './../store/search/sagas'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(searchSaga)

export { store }