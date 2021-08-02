import { Action } from "redux";
import { Tweet } from "../../tweets/contracts/state";
import { LoadingState, TweetState } from "./state";
export enum TweetDataActionsType {
    SET_TWEET_DATA='tweet/SET_TWEET_DATA',
    FETCH_TWEET_DATA='tweet/FETCH_TWEET_DATA',
    SET_LOADING_STATE='tweet/SET_LOADING_STATE'
}

export interface SetTweetDataActionsInterface extends Action<TweetDataActionsType>{
    type: TweetDataActionsType.SET_TWEET_DATA;
    payload: TweetState['data'];
}
export interface FetchTweetDataActionsInterface extends Action<TweetDataActionsType>{
    type: TweetDataActionsType.FETCH_TWEET_DATA;
    payload: string
}
export interface SetTweetDataLoadingStateActionInterface extends Action<TweetDataActionsType>{
    type: TweetDataActionsType.SET_LOADING_STATE;
    payload: LoadingState
}
/*{
type: ''tweet/FETCH_TWEET_DATA',
payload: '610350hh9ggghfjhfklhjfhh45h44ef'
} */

