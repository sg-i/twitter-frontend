import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PopularTweetsApi } from '../../../services/api/popularTweetsApi';

import { fetchPopularTweets,PopularTweetsActionsType,setPopularTweets,setPopularTweetsLoadingState } from './actionCreators';
import { LoadingState } from './contracts/state';

export function* fetchPopularTweetsRequest():any{
  try{
    const items = yield call(PopularTweetsApi.fetchPopularTweets);
    yield put(setPopularTweets(items))
  }
  catch(error){
    yield put(setPopularTweetsLoadingState(LoadingState.ERROR))

  }
}

export function* popularTweetsSaga() {
  yield takeEvery(PopularTweetsActionsType.FETCH_POPULAR_TWEETS,fetchPopularTweetsRequest)
}