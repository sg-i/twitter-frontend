
import { Tweet } from "../tweets/contracts/state";
import { FetchTweetDataActionsInterface, SetTweetDataActionsInterface, SetTweetDataLoadingStateActionInterface, TweetDataActionsType } from "./contracts/actionTypes";
import { LoadingState, TweetState } from "./contracts/state";



export const setTweetData = (payload: TweetState['data']): SetTweetDataActionsInterface => ({
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload,
})
export const setTweetDataLoadingState = (payload: LoadingState): SetTweetDataLoadingStateActionInterface => ({
    type: TweetDataActionsType.SET_LOADING_STATE,
    payload,
})
export const fetchTweetData = (payload: string): FetchTweetDataActionsInterface => ({
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload,
    
})

export type TweetActions= 
    |SetTweetDataActionsInterface
    |FetchTweetDataActionsInterface
    |SetTweetDataLoadingStateActionInterface;