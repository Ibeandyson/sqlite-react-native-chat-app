import { put, call, takeLatest, takeEvery, all } from 'redux-saga/effects'
import { MESSAGE_REQUESTED, MESSAGE_REQUESTED_SUCCESSFUL, MESSAGE_REQUESTED_FAILED, LOADING, SET_SINGLE_CHAT_MESSAGES } from '../actionTypes'



const getMessages = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/")
        .then(response => ({ response }))
        .catch(error => ({ error }))
}

export type PromiseFn = (...args: any) => Promise<any>;
export type GetT<T> = T extends Promise<infer N> ? N : any;
export type GetFnResult<T extends PromiseFn> = GetT<ReturnType<T>>;

function* getMessageSaga(data: any) {
    if(data === undefined) {
        yield put(data)
    }
}

function* setSingleChatMessage(data: any) {
    if(data === undefined) {
        yield put(data)
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(MESSAGE_REQUESTED_SUCCESSFUL, getMessageSaga),
        takeEvery(SET_SINGLE_CHAT_MESSAGES, setSingleChatMessage)
    ])
}

