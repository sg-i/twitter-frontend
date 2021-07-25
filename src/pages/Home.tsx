import React from 'react';
import {
  createStyles,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import { theme } from '../theme';

const useHomeStyles = makeStyles(() => ({
  sideMenu: {
    margin: '0',
    padding: 0,
    listStyleType: 'none',
  },
  sideMenuListItem: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 3,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: '5px',
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    '&:hover': {
      color: theme.palette.primary.main,
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
      paddingLeft: 20,
    },
  }),
)(InputBase);
export function Home() {
  const classes = useHomeStyles();
  return (
    <section style={{ margin: '0 auto' }}>
      <Grid container justifyContent="center" alignItems="stretch" direction="row">
        <Grid item xs={2}>
          <ul className={classes.sideMenu}>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <TwitterIcon className={classes.sideMenuListItemIcon}></TwitterIcon>
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <HomeIcon className={classes.sideMenuListItemIcon} color="secondary"></HomeIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Главная
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <SearchIcon className={classes.sideMenuListItemIcon} color="secondary"></SearchIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Обзор
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <NotificationsIcon
                  className={classes.sideMenuListItemIcon}
                  color="secondary"></NotificationsIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <MailIcon className={classes.sideMenuListItemIcon} color="secondary"></MailIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <BookmarkIcon
                  className={classes.sideMenuListItemIcon}
                  color="secondary"></BookmarkIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <FeaturedIcon
                  className={classes.sideMenuListItemIcon}
                  color="secondary"></FeaturedIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Списки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <PersonIcon className={classes.sideMenuListItemIcon} color="secondary"></PersonIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Профиль
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary">
                <MoreIcon className={classes.sideMenuListItemIcon} color="secondary"></MoreIcon>
              </IconButton>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                Еще
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}></li>
          </ul>
        </Grid>
        <Grid item xs={4}>
          middle block
        </Grid>
        <Grid item xs={2}>
          <SearchTextField placeholder="Поиск в Твиттере" fullWidth></SearchTextField>
        </Grid>
      </Grid>
    </section>
  );
}
