import React from 'react';
import cN from 'classnames';
import { useHomeStyles } from '../pages/Home/theme';

import {
  Avatar,
  createStyles,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import ReTweetIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Reply';
import { Link, useParams } from 'react-router-dom';
interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>;
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
  handleTweet(obj: any, _id: any): void;
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
  classes,
  handleTweet,
}: TweetProps): React.ReactElement => {
  return (
    <Paper className={cN(classes.tweet, classes.tweetsHeader)} variant="outlined" square>
      <Link onClick={() => handleTweet(user.fullname, _id)} to={`/${user.fullname}/status/${_id}`}>
        {' '}
        <Grid style={{ flexWrap: 'nowrap' }} container>
          <Grid style={{ minWidth: '70px' }} item xs={1}>
            <Avatar
              className={classes.tweetUserAvatar}
              alt={`Аватарка пользователя ${user.fullname}`}
              src={user.avatarUrl}></Avatar>
          </Grid>
          <Grid item xs>
            <Typography
              style={{ fontFamily: 'Segoe UI', fontWeight: 700, fontSize: 15 }}
              variant="h6">
              <b>{user.username}</b>{' '}
              <span className={classes.tweetsUserName}>{'@' + user.fullname + ' · 1 ч'}</span>
            </Typography>
            <Typography style={{ fontSize: 15 }} variant="body1">
              {text}
            </Typography>
            <div className={classes.tweetMenu}>
              <div>
                <IconButton>
                  <CommentIcon style={{ fontSize: 19 }} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <ReTweetIcon style={{ fontSize: 19 }} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <LikeIcon style={{ fontSize: 19 }} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <ShareIcon style={{ fontSize: 19 }} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Link>{' '}
    </Paper>
  );
};
