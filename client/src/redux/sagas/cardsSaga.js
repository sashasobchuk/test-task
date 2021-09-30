import { call, put, takeEvery} from "redux-saga/effects";
import {DOWNLOAD_CARDS, setLoadCards} from "../cards_Reducer";
import {downloadCardsApi} from "../../api/api";




export function* watchDownloadCards() {
    yield takeEvery(DOWNLOAD_CARDS,downloadCardsWorker);
}

function* downloadCardsWorker(   ) {
    const data = yield call(downloadCardsApi)
    yield put(setLoadCards(data.data))
}



