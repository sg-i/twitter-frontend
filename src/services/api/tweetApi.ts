import axios from "axios";
import { TweetState } from "../../store/ducks/tweet/contracts/state";
import { Tweet } from "../../store/ducks/tweets/contracts/state";



export const TweetApi={
    fetchTweetData(id:string): Promise<Tweet[]>{
        return  axios.get('/tweets/?_id='+id).then(({data})=> data);
    },
};