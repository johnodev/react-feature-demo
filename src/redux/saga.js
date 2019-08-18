import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_API_DATA_REQUEST, getApiDataSuccess } from './actions';
import { fetchData } from './api';

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(getApiDataSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* apiSaga() {
  yield takeLatest(GET_API_DATA_REQUEST, getApiData);
}