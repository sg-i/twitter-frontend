
import { call, put, takeLatest } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsApi';

import { addTweet, AddTweetsActionsInterface, setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import { LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest():any{
  try{
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items))
  }
  catch(error){
    yield put(setTweetsLoadingState(LoadingState.ERROR))

  }
}

export function* AddTweetRequest({payload}:AddTweetsActionsInterface):any{
  try{
    const data :Tweet ={
      _id:  Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Test fullname',
        username: 'Test username',
        avatarUrl: "https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg"
      }
    }
    const items = yield call(TweetsApi.addTweet,data);
    // yield put(addTweet(items))
  }
  catch(error){
    yield put(setTweetsLoadingState(LoadingState.ERROR))

  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.ADD_TWEET, AddTweetRequest)
}