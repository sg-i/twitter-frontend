//@ts-ignore
import axios from "axios";
import { PopularTweetsState } from "../../store/ducks/popularTweets/contracts/state";



export const PopularTweetsApi={
    fetchPopularTweets(): Promise<PopularTweetsState["items"]>{
        return  axios.get('/popularTweets').then(({data})=> data);
    },
};