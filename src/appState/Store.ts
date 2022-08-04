import messageReducer  from "./reducers"
import rootSaga from "./saga"
import { createStore, applyMiddleware,  } from 'redux'
import createSagaMiddleware from 'redux-saga'



const sagaMiddleware = createSagaMiddleware()

export const store = createStore( messageReducer , applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)