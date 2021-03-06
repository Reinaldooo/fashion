import { put, takeLatest, all, call } from 'redux-saga/effects';

function fetchProducts() {
  return fetch("https://api.reinaldowft.com/fashion")
    .then((data) => data.json())
}

function* callFetchProducts() {
  try {
    const products = yield call(fetchProducts)
    yield put({ type: 'PRODUCTS_FETCH_SUCCESS', payload: products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_FETCH_ERROR', payload: error })
  }
}

export function* watchProductsFetchCall() {
  yield takeLatest('PRODUCTS_FETCH', callFetchProducts)
}

export default function* rootSaga() {
  yield all([
    watchProductsFetchCall()
  ])
}