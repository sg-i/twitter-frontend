import { RootState } from "../../store";

export const selectTweet = (state: RootState) => state.tweet;

export const selectTweetData = (state: RootState) => state.tweet.data;

export const selectLoadingState = (state: RootState) => state.tweet.loadingState;