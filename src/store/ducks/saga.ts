import { all } from "redux-saga/effects";
import { popularTweetsSaga } from "./popularTweets/sagas";
import { tweetSaga } from "./tweet/sagas";
import { tweetsSaga } from "./tweets/sagas";

export default function* rootSaga(){
    yield all([tweetsSaga(),tweetSaga(),popularTweetsSaga()])
}