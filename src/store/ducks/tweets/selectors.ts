import { RootState } from "../../store";
import { TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = (state: RootState) => state.tweets.items;

export const selectLoadingState = (state: RootState) => state.tweets.loadingState;