import {fetchStarsips} from './../../../../api';
import {call, put, apply} from 'redux-saga/effects';
import {fillStarships, startFetching, stopFetching} from './../../actions';

export function* fetchStarshipsAsync() {
    try {
        yield put(startFetching());
        const response = yield call(fetchStarsips);
        const data = yield apply(response, response.json);

        yield put(fillStarships(data.results));
    } catch (error) {
        // некоторая работа
    } finally {
        yield put(stopFetching());
    }
}
