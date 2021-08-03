
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { Tweet } from '../tweets/contracts/state';


import { setTweetData, setTweetDataLoadingState } from './actionCreators';
import { FetchTweetDataActionsInterface, TweetDataActionsType } from './contracts/actionTypes';
import { LoadingState } from './contracts/state';

export function* fetchTweetRequest({payload: tweetId}:FetchTweetDataActionsInterface ){
 try{
    const data:Tweet[] = yield call(TweetsApi.fetchTweetData,tweetId);
    yield put(setTweetData(data[0]))
  }
  catch(error){
    yield put(setTweetDataLoadingState(LoadingState.ERROR))

  }
}

export function* tweetSaga() {
 
  yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetRequest)
}