import {put, takeEvery} from 'redux-saga/effects'
import { showLoader } from './app_action';
import { REQUEST_POSTS } from './posts_types';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
    yield put(showLoader)
}

