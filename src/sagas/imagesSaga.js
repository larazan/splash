import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

const getpage = state => state.nextPage;

// worker saga
export function* handleImagesLoad() {
    // console.log('fetching image from unsplash');
    try {
        const page = yield select(getpage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
        console.log('page', page);
        console.log(images);
    } catch (error) {
        // dispatch error
        yield put(setError(error.toString()));
    }
}

// watcher saga
export default function* watchImagesload() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// watcher saga -> actions -> worker saga
