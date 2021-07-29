

import { createStore, compose,applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./ducks/saga";
import { TweetsState } from "./ducks/tweets/contracts/state";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface RootState{
    tweets: TweetsState;
}

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)