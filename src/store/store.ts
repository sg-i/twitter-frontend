

import { createStore, compose,applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./ducks/saga";
import { TweetsState } from "./ducks/tweets/contracts/state";
import { PopularTweetsState } from "./ducks/popularTweets/contracts/state";
import { TweetState } from "./ducks/tweet/contracts/state";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface RootState{
    tweets: TweetsState;
    popularTweets: PopularTweetsState;
    tweet: TweetState
}

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)