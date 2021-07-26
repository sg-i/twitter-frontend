import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MailIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import { useHomeStyles } from '../pages/Home';
import { Hidden, IconButton, Typography } from '@material-ui/core';
interface SideBarProps {
  classes: ReturnType<typeof useHomeStyles>;
}
export const SideBar: React.FC<SideBarProps> = ({ classes }: SideBarProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenu}>
      <li className={classes.sideMenuListItem} style={{ marginLeft: -12 }}>
        <IconButton color="primary">
          <TwitterIcon
            className={classes.sideMenuListItemIcon}
            style={{ marginLeft: 15 }}></TwitterIcon>
        </IconButton>
      </li>

      <div>
        <li className={classes.sideMenuListItem}>
          <HomeIcon className={classes.sideMenuListItemIcon} color="secondary"></HomeIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Главная
            </Typography>
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <SearchIcon className={classes.sideMenuListItemIcon} color="secondary"></SearchIcon>

          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Обзор
            </Typography>
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <NotificationsIcon
            className={classes.sideMenuListItemIcon}
            color="secondary"></NotificationsIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <MailIcon className={classes.sideMenuListItemIcon} color="secondary"></MailIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <BookmarkIcon className={classes.sideMenuListItemIcon} color="secondary"></BookmarkIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <FeaturedIcon className={classes.sideMenuListItemIcon} color="secondary"></FeaturedIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Списки
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <PersonIcon className={classes.sideMenuListItemIcon} color="secondary"></PersonIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}>
          <MoreIcon className={classes.sideMenuListItemIcon} color="secondary"></MoreIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Еще
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div>
        <li className={classes.sideMenuListItem}></li>
      </div>
    </ul>
  );
};
