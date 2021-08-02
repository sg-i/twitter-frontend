import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Tweet } from '../../components/Tweet';
import { fetchTweetData, setTweetData } from '../../store/ducks/tweet/actionCreators';
import { selectTweetData } from '../../store/ducks/tweet/selectors';
import { useHomeStyles } from './theme';
import cN from 'classnames';

import {
  Avatar,
  createStyles,
  Divider,
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
import { AddTweetForm } from '../../components/AddTweetForm';

export const TweetData: React.FC = (): React.ReactElement | null => {
  const dispatch = useDispatch();
  const data = useSelector(selectTweetData);
  const history = useHistory();
  {
    let id: string = history.location.pathname.slice(
      history.location.pathname.lastIndexOf('/') + 1,
    );
    React.useEffect(() => {
      dispatch(fetchTweetData(id));
      return () => {
        dispatch(setTweetData(undefined));
      };
    }, []);
  }
  const classes = useHomeStyles();
  if (data) {
    console.log(data);
    return (
      <Paper className={cN(classes.tweetsHeader)} variant="outlined" square>
        <Grid style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }} container>
          <div style={{ minWidth: '70px', display: 'flex', marginBottom: 5 }}>
            <Grid style={{ minWidth: '70px' }} item xs={1}>
              <Avatar
                className={classes.tweetUserAvatar}
                alt={`Аватарка пользователя ${data.user.username}`}
                src={data.user.avatarUrl}></Avatar>
            </Grid>
            <Grid style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }} item xs>
              <Typography
                style={{
                  fontFamily: 'Segoe UI',
                  fontWeight: 700,
                  fontSize: 15,
                }}
                variant="h6">
                <b>{data.user.username}</b>
              </Typography>
              <Typography
                style={{ fontFamily: 'Segoe UI', fontWeight: 700, fontSize: 15 }}
                variant="h6">
                <span className={classes.tweetsUserName}>{'@' + data.user.fullname}</span>
              </Typography>
            </Grid>
          </div>
          <div style={{ padding: 10 }}>
            <Typography
              style={{
                fontFamily: 'Segoe UI',
                fontWeight: 400,
                fontSize: 23,
                lineHeight: '28px',
              }}
              variant="body1">
              {data.text}
            </Typography>
            <Typography
              style={{
                color: '#536371',
                margin: '20px 0px',
                fontFamily: 'inherit',
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '20px',
              }}>
              12:40 PM · 2 авг. 2021 г.·Twitter for iPhone
            </Typography>
            <Divider style={{ backgroundColor: 'rgb(239, 243, 244)' }} variant="fullWidth" />

            <Typography
              style={{
                color: '#536371',
                margin: '20px 0px',
                fontFamily: 'inherit',
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '20px',
                display: 'flex',
                marginBottom: 20,
              }}>
              <div style={{ marginRight: 10 }}>
                <b style={{ color: '#0f1419' }}>2</b> ретвита
              </div>

              <div>
                <b style={{ color: '#0f1419' }}>251</b> отметка «Нравится»
              </div>
            </Typography>
            <Divider style={{ backgroundColor: 'rgb(239, 243, 244)' }} variant="fullWidth" />
            <Divider style={{ backgroundColor: 'rgb(239, 243, 244)' }} variant="fullWidth" />

            <div
              className={classes.tweetMenu}
              style={{ marginTop: 5, width: '80%', margin: '2px auto', padding: 0 }}>
              <div>
                <IconButton>
                  <CommentIcon style={{ fontSize: 22 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <ReTweetIcon style={{ fontSize: 22 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <LikeIcon style={{ fontSize: 22 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <ShareIcon style={{ fontSize: 22 }} />
                </IconButton>
              </div>
            </div>
            <Divider style={{ backgroundColor: 'rgb(239, 243, 244)' }} variant="fullWidth" />
            <Typography
              style={{
                color: '#536371',
                margin: '20px 0px',
                fontFamily: 'inherit',
                fontSize: 15,
                fontWeight: 400,
                lineHeight: '20px',
                display: 'flex',
                marginBottom: 20,
              }}>
              <div
                style={{
                  marginLeft: 78,
                  marginBottom: -20,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                <span>В ответ</span>
                <Typography style={{ marginLeft: 4 }} color="primary">
                  {'@' + data.user.fullname}
                </Typography>
              </div>
            </Typography>
            <AddTweetForm title="Твитнуть в ответ" classes={classes}></AddTweetForm>
          </div>
        </Grid>
      </Paper>
    );
  } else {
    return null;
  }
};
