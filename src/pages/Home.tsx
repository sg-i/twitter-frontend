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
import { Tweet } from '../components/Tweet';
import { SideBar } from '../components/SideBar';
import { AddTweetForm } from '../components/AddTweetForm';
import { NewsOnTweetItem } from '../components/NewsOnTweet/NewsOnTweetItem';
import { NewsOnTweetBlock } from '../components/NewsOnTweet/NewsOnTweetBlock';
import { WhoToReadBlock } from '../components/WhoToRead/WhoToReadBlock';
import { SearchTextField } from '../components/SearchTextField';

export const useHomeStyles = makeStyles((theme) => ({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: 0,
    listStyleType: 'none',
    // paddingLeft: '125px',
    // paddingRight: '21px',
  },
  sideMenuContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    // paddingRight: '30px',
    paddingLeft: 63,
    borderRadius: '30px',
    width: 'max-content',
    marginRight: 20,
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'rgba(29,161,242,0.1)',
      '& svg path': {
        fill: theme.palette.primary.main,
      },
    },
  },
  sideMenuListItem: {
    height: 50,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    margin: '3px 0',
  },

  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: '3px',
    paddingRight: 10,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginRight: 15,
    marginLeft: -49,
  },
  tweetsWrapper: {
    height: '100%',
    width: '100%',
    padding: 0,
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    padding: '10px 5px',
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
  },
  tweetsUserName: {
    color: '#536471',
    fontSize: 15,
    fontWeight: 400,
  },
  tweet: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(245,248,250)',
    },
  },
  tweetUserAvatar: {
    margin: '0 auto',
    height: 48,
    width: 48,
  },
  tweetMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 440,
    marginLeft: '-12px',
  },
  sideMenuTweetContainer: {
    display: 'block',
    width: '90%',
    padding: '0 0',
    margin: 0,
    marginTop: 10,
  },
  sideMenuTweetButton: {
    width: '90%',
    height: 50,
    padding: '0 0',
    margin: 0,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(26, 145, 218)',
      boxShadow: 'none',
    },
  },
  addTweetPaper: {
    minHeight: 125,
    paddingRight: 15,
  },
  addTweetTextArea: {
    width: '100%',
    paddingTop: 10,
    fontFamily: 'inherit',
    fontSize: 20,
    outline: 'none',
    border: 'none',
    resize: 'none',
    paddingBottom: 30,
  },
  AddTweetFormOption: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '-5px',
    paddingTop: 10,
  },
  AddTweetFormMenu: {
    marginBottom: -5,
    display: 'flex',
    width: '100%',
  },
  AddTweetFormButton: {
    minWidth: 120,
    height: 40,
    marginLeft: 7,
    marginRight: 10,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(26, 145, 218)',
      boxShadow: 'none',
    },
  },
  newsOnTweet: {
    marginTop: 17,
    backgroundColor: '#f7f9f9',
    borderRadius: 20,
  },
  NewsOnTweetItemWrapper: {
    padding: 5,
    display: 'flex',
  },
  NewsOnTweetItemMainSide: {},
  NewsOnTweetItemUser: {
    display: 'flex',
    alignItems: 'center',
  },
  twitterNewsAndPeoples: {
    top: 0,
    width: 390,
    position: 'sticky',

    padding: '0px 30px',
    display: 'flex',
    flexDirection: 'column',
  },
  modalAddTweet: {
    borderRadius: 50,
    margin: '0 auto',
    height: '100',
  },
}));

export function Home() {
  const classes = useHomeStyles();

  return (
    <section>
      <Grid container justifyContent="center" direction="row" style={{ flexWrap: 'nowrap' }}>
        <Grid
          style={{ position: 'sticky', top: '0', paddingLeft: 20, maxWidth: 270, height: '100%' }}
          item>
          <SideBar classes={classes}></SideBar>
        </Grid>
        <Grid style={{ width: 600, height: '100%' }} item>
          <Paper className={classes.tweetsWrapper} variant="outlined" square>
            <Paper
              className={classes.tweetsHeader}
              style={{ position: 'sticky', top: '0', zIndex: 1 }}
              variant="outlined"
              square>
              <Typography style={{ fontFamily: 'Segoe UI', fontWeight: 900 }} variant="h6">
                Главная
              </Typography>
            </Paper>

            <AddTweetForm classes={classes}></AddTweetForm>

            <div style={{ backgroundColor: '#f7f9f9', minHeight: 13 }}></div>

            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
            <Tweet
              user={{
                fullname: 'annylaifu',
                username: 'anny',
                avatarUrl:
                  'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              }}
              text="this was supposed to be a pretty picture with pink sunset.. i am pretty disappointed with iphone's camera, or maybe there's something you can do with settings? idk T__T"
              classes={classes}></Tweet>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.twitterNewsAndPeoples} item>
            <div
              style={{
                backgroundColor: '#fff',
                position: 'sticky',
                top: 0,
                zIndex: 2,
                padding: ' 5px 0',
              }}>
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
