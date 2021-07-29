import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/twetsApi';

import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest():any{
  try{
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  }
  catch(error){
    yield put(setTweetsLoadingState(LoadingState.ERROR))

  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}