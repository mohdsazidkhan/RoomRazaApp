import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { rootSaga } from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware()
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)
export default store;