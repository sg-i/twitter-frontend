export enum LoadingState{
    LOADED = 'LOADED',
    LOADING= 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface PopularTweet{
    _id: string,
    text: string;
    user: {
      fullname: string;
      username: string;
      avatarUrl: string;
    };
}

export interface PopularTweetsState{
    items: PopularTweet[];
    loadingState: LoadingState;
}