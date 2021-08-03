import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/state";

export enum TweetsActionsType {
    SET_TWEETS='tweets/SET_TWEETS',
    FETCH_TWEETS='tweets/FETCH_TWEETS',
    SET_LOADING_STATE='tweets/SET_LOADING_STATE',
    ADD_TWEET='tweets/ADD_TWEET'
}

export interface SetTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}
export interface AddTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.ADD_TWEET;
    payload: string;
}
export interface FetchTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;
}
export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState
}



export const setTweets = (payload: TweetsState['items']): SetTweetsActionsInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})
export const addTweet = (payload: string): AddTweetsActionsInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})
export const setTweetsLoadingState = 
    ((payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
        type: TweetsActionsType.SET_LOADING_STATE,
        payload,
}))
export const fetchTweets = (): FetchTweetsActionsInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
    
})
export type TweetsActions= 
    |SetTweetsActionsInterface
    |FetchTweetsActionsInterface
    |AddTweetsActionsInterface
    |SetTweetsLoadingStateActionInterface;