import { takeEvery, } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log('Hello');
}

export function* fetchCollectionStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
