import produce, { Draft } from 'immer';
import { TweetActions } from './actionCreators';
import { TweetDataActionsType } from './contracts/actionTypes';
import { LoadingState, TweetState } from './contracts/state';

const initialTweetState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const tweetReducer = produce((draft :Draft<TweetState>, action: TweetActions)=>{
    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data=action.payload;
            draft.loadingState=LoadingState.LOADED;
            break;
        case TweetDataActionsType.FETCH_TWEET_DATA:
            draft.data=undefined;
            draft.loadingState=LoadingState.LOADING;
            break;            
        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState=action.payload
            break;
        default:
            break;
    }
  
    
},initialTweetState)