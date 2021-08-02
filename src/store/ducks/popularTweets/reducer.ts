import produce, { Draft } from 'immer';
import { PopularTweetsActionsType, PopularTweetsActions } from './actionCreators';
import { LoadingState, PopularTweetsState } from './contracts/state';

const initialPopularTweetsState: PopularTweetsState = {
    items: [],
    loadingState: LoadingState.NEVER
};

export const popularTweetsReducer = produce((draft :Draft<PopularTweetsState>, action: PopularTweetsActions)=>{
    switch (action.type) {
        case PopularTweetsActionsType.SET_POPULAR_TWEETS:
            draft.items=action.payload;
            draft.loadingState=LoadingState.LOADED;
            break;
        case PopularTweetsActionsType.FETCH_POPULAR_TWEETS:
            draft.items=[];
            draft.loadingState=LoadingState.LOADING;
            break;            
        case PopularTweetsActionsType.SET_LOADING_STATE:
            draft.loadingState=action.payload
            break;
        default:
            break;
    }
  
    
},initialPopularTweetsState)