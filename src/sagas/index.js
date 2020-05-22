// import { takeEvery } from 'redux-saga/effects';

// import { IMAGES } from '../constants';

// // worker saga
// function* handleImagesLoad() {
//     console.log('fetching image from unsplash');
// }

// // watcher saga
// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }

// // watcher saga -> actions -> worker saga

// export default rootSaga;

import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

function* rootSaga() {
    yield all([imagesSaga(), statsSaga()]);
}

export default rootSaga;
