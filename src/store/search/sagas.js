import { call, takeEvery, put } from 'redux-saga/effects'

import { ActionTypes } from './types'
import { getSearchQuery } from './selectors';
import { API } from '../../services'

function* fetchRepositoriesSaga() {
    try {
        const response = yield call(API.search.fetchRepositories(getSearchQuery));
        console.log('fetchRepositoriesSaga', response)
        //yield put(saveRepositories(response.results));
    } catch (error) {
        console.warn(error);
    }
}

export function* searchSaga() {
    yield takeEvery(ActionTypes.fetchRepositories, fetchRepositoriesSaga)
}

