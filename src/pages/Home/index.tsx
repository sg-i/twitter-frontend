import React from 'react';
import cN from 'classnames';
import {
  Avatar,
  createStyles,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  withStyles,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/SearchOutlined';
import { grey } from '@material-ui/core/colors';
import { Tweet } from '../../components/Tweet';
import { SideBar } from '../../components/SideBar';
import { BtnGoBack } from './btnGoBack';
import { AddTweetForm } from '../../components/AddTweetForm';
import { NewsOnTweetItem } from '../../components/NewsOnTweet/NewsOnTweetItem';
import { NewsOnTweetBlock } from '../../components/NewsOnTweet/NewsOnTweetBlock';
import { WhoToReadBlock } from '../../components/WhoToRead/WhoToReadBlock';
import { SearchTextField } from '../../components/SearchTextField';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { fetchPopularTweets } from '../../store/ducks/popularTweets/actionCreators';
import { selectPopularTweetsItems } from '../../store/ducks/popularTweets/selectors';
import { Route } from 'react-router-dom';
import { useHomeStyles } from './theme';
import { useHistory } from 'react-router-dom';
import { TweetData } from './TweetData';

export function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useHomeStyles();
  const tweets = useSelector(selectTweetsItems);

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchPopularTweets());
  }, [dispatch]);

  const [lastHandleTweet, setLastHandleTweet] = React.useState({ user: '', _id: '' });
  const handleTweet = (user: any, _id: any): void => {
    setLastHandleTweet({ user, _id });
  };

  return (
    <section>
      <Grid container justifyContent="center" direction="row" style={{ flexWrap: 'nowrap' }}>
        <Grid className={classes.sidebarWrapper} item>
          <SideBar classes={classes}></SideBar>
        </Grid>
        <Grid style={{ width: 600, height: '100%' }} item>
          <Paper className={classes.tweetsWrapper} variant="outlined" square>
            <Paper
              className={classes.tweetsHeader}
              style={{ padding: 0, height: 55, position: 'sticky', top: '0', zIndex: 1 }}
              variant="outlined"
              square>
              {history.location.pathname.includes('/status/') && (
                <Route path={history.location.pathname} exact>
                  <div style={{ padding: 0, display: 'flex', alignItems: 'center' }}>
                    <BtnGoBack />
                    <Typography
                      style={{
                        marginBottom: 3,
                        fontFamily: 'Segoe UI',
                        fontWeight: 900,
                      }}
                      variant="h6">
                      Твит
                    </Typography>
                  </div>
                </Route>
              )}

              <Route path="/home" exact>
                <Typography
                  style={{ padding: 10, fontFamily: 'Segoe UI', fontWeight: 900 }}
                  variant="h6">
                  Главная
                </Typography>
              </Route>
            </Paper>

            <Route path="/home" exact>
              <AddTweetForm title="Что происходит?" classes={classes}></AddTweetForm>

              <div style={{ backgroundColor: '#f7f9f9', minHeight: 13 }}></div>
              {tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  user={{
                    fullname: tweet.user.fullname,
                    username: tweet.user.username,
                    avatarUrl: tweet.user.avatarUrl,
                  }}
                  _id={tweet._id}
                  text={tweet.text}
                  classes={classes}
                  handleTweet={handleTweet}></Tweet>
              ))}
            </Route>

            {history.location.pathname.includes('/status/') && (
              <Route path={history.location.pathname} exact>
                <TweetData />
              </Route>
            )}
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.twitterNewsAndPeoples} item>
            <div className={classes.searchTextFieldArea}>
              <SearchTextField
                variant="outlined"
                placeholder="Поиск в Твиттере"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}></SearchTextField>
            </div>

            <NewsOnTweetBlock classes={classes} />
            <WhoToReadBlock classes={classes} />
          </Grid>
        </Hidden>
      </Grid>
    </section>
  );
}
