import { RootState } from "../../store";
import { PopularTweetsState } from "./contracts/state";

export const selectPopularTweets = (state: RootState) => state.popularTweets;

export const selectPopularTweetsItems = (state: RootState) => state.popularTweets.items;

export const selectPopularTweetsLoadingState = (state: RootState) => state.popularTweets.loadingState;