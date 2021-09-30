import {all} from 'redux-saga/effects'
import {watchDownloadCards} from "./cardsSaga";

export function* allWatchers() {
    yield all([
        watchDownloadCards()
        ]

    )
}








