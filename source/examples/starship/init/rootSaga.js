import {all} from 'redux-saga/effects';
import {watchFeed} from './../bus/feed/saga/watchers';

export function* rootSaga() {
    yield all([ watchFeed() ]);
}
