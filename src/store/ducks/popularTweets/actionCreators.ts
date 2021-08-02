import { Action } from "redux";
import { LoadingState, PopularTweetsState } from "./contracts/state";

export enum PopularTweetsActionsType {
    SET_POPULAR_TWEETS='popularTweets/SET_POPULAR_TWEETS',
    FETCH_POPULAR_TWEETS='popularTweets/FETCH_POPULAR_TWEETS',
    SET_LOADING_STATE='popularTweets/SET_LOADING_STATE'
}

export interface SetPopularTweetsActionsInterface extends Action<PopularTweetsActionsType>{
    type: PopularTweetsActionsType.SET_POPULAR_TWEETS;
    payload: PopularTweetsState['items'];
}
export interface FetchPopularTweetsActionsInterface extends Action<PopularTweetsActionsType>{
    type: PopularTweetsActionsType.FETCH_POPULAR_TWEETS;
}
export interface SetPopularTweetsLoadingStateActionInterface extends Action<PopularTweetsActionsType>{
    type: PopularTweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState
}

export const setPopularTweets = (payload: PopularTweetsState['items']): SetPopularTweetsActionsInterface => ({
    type: PopularTweetsActionsType.SET_POPULAR_TWEETS,
    payload,
})
export const setPopularTweetsLoadingState = 
    ((payload: LoadingState): SetPopularTweetsLoadingStateActionInterface => ({
        type: PopularTweetsActionsType.SET_LOADING_STATE,
        payload,
}))
export const fetchPopularTweets = (): FetchPopularTweetsActionsInterface => ({
    type: PopularTweetsActionsType.FETCH_POPULAR_TWEETS,
    
})
export type PopularTweetsActions= 
    |SetPopularTweetsActionsInterface
    |FetchPopularTweetsActionsInterface
    |SetPopularTweetsLoadingStateActionInterface;