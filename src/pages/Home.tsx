import React from 'react';

import {
  Avatar,
  createStyles,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  withStyles,
} from '@material-ui/core';

import { theme } from '../theme';
import { grey } from '@material-ui/core/colors';
import { Tweet } from '../components/Tweet';
import { SideBar } from '../components/SideBar';

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
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      height: 45,
      padding: 0,
      margin: 0,
      paddingLeft: 20,
    },
  }),
)(InputBase);
export function Home() {
  const classes = useHomeStyles();
  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches);
  return (
    <section>
      <Grid container justifyContent="center" direction="row" style={{ flexWrap: 'nowrap' }}>
        <Grid style={{ paddingLeft: 20, maxWidth: 270, height: '100%' }} item>
          <SideBar classes={classes}></SideBar>
        </Grid>
        <Grid style={{ width: 600, height: '100%' }} item>
          <Paper className={classes.tweetsWrapper} variant="outlined" square>
            <Paper className={classes.tweetsHeader} variant="outlined" square>
              <Typography style={{ fontFamily: 'Segoe UI', fontWeight: 900 }} variant="h6">
                Главная
              </Typography>
            </Paper>
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
          <Grid style={{ width: 390, height: '100%', padding: '0px 30px' }} item>
            <SearchTextField placeholder="Поиск в Твиттере" fullWidth></SearchTextField>
          </Grid>
        </Hidden>
      </Grid>
    </section>
  );
}
