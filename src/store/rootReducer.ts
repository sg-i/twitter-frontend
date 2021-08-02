import { combineReducers } from "redux";
import { popularTweetsReducer } from "./ducks/popularTweets/reducer";
import { tweetReducer } from "./ducks/tweet/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { RootState } from "./store";
export const rootReducer =combineReducers({
    tweet: tweetReducer,
    tweets: tweetsReducer,
    popularTweets: popularTweetsReducer
});