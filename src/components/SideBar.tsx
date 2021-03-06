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
import SideAddTweetIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import { useHomeStyles } from '../pages/Home/theme';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Hidden,
  IconButton,
  Theme,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { Link } from 'react-router-dom';
interface SideBarProps {
  classes: ReturnType<typeof useHomeStyles>;
}

const DialogAddTweet = withStyles((theme: Theme) => ({
  root: {
    '& .MuiDialog-paper': {
      borderRadius: 20,
      marginBottom: 500,
      boxShadow: 'none',
    },
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
  },
}))(Dialog);

export const SideBar: React.FC<SideBarProps> = ({ classes }: SideBarProps): React.ReactElement => {
  const [visibleModalBlock, setVisibleModalBlock] = React.useState(false);
  const handleOpenModalBlock = (): void => {
    setVisibleModalBlock(true);
  };
  const handleCloseModalBlock = (): void => {
    setVisibleModalBlock(false);
  };
  return (
    <ul className={classes.sideMenu}>
      <li className={classes.sideMenuListItem} style={{ cursor: 'default' }}>
        <Link to="/home">
          <IconButton style={{ width: 60 }} color="primary">
            <TwitterIcon
              className={classes.sideMenuListItemIcon}
              style={{ marginLeft: 17 }}></TwitterIcon>
          </IconButton>{' '}
        </Link>
      </li>

      <div className={classes.sideMenuContainer}>
        <Link to="/home">
          <li className={classes.sideMenuListItem}>
            <HomeIcon className={classes.sideMenuListItemIcon} color="secondary"></HomeIcon>
            <Hidden mdDown>
              <Typography className={classes.sideMenuListItemLabel} variant="h6">
                ??????????????
              </Typography>
            </Hidden>
          </li>
        </Link>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <SearchIcon className={classes.sideMenuListItemIcon} color="secondary"></SearchIcon>

          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ??????????
            </Typography>
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <NotificationsIcon
            className={classes.sideMenuListItemIcon}
            color="secondary"></NotificationsIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ??????????????????????
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <MailIcon className={classes.sideMenuListItemIcon} color="secondary"></MailIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ??????????????????
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <BookmarkIcon className={classes.sideMenuListItemIcon} color="secondary"></BookmarkIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ????????????????
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <FeaturedIcon className={classes.sideMenuListItemIcon} color="secondary"></FeaturedIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ????????????
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <PersonIcon className={classes.sideMenuListItemIcon} color="secondary"></PersonIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ??????????????
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuContainer}>
        <li className={classes.sideMenuListItem}>
          <MoreIcon className={classes.sideMenuListItemIcon} color="secondary"></MoreIcon>
          <Hidden mdDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              ??????
            </Typography>{' '}
          </Hidden>
        </li>
      </div>
      <div className={classes.sideMenuTweetContainer}>
        <li>
          {' '}
          <Button
            onClick={handleOpenModalBlock}
            className={classes.sideMenuTweetButton}
            variant="contained"
            color="primary">
            <Hidden mdDown>????????????????</Hidden>
            <Hidden lgUp>
              <SideAddTweetIcon />
            </Hidden>
          </Button>
          <div className={classes.modalAddTweet}>
            <DialogAddTweet onClose={handleCloseModalBlock} open={visibleModalBlock}>
              <DialogTitle style={{ padding: 7 }}>
                <IconButton onClick={handleCloseModalBlock} size="medium" color="primary">
                  <ClearIcon />
                </IconButton>
              </DialogTitle>
              <Divider />

              <AddTweetForm title="?????? ?????????????????????" minRows={3} classes={classes} />
            </DialogAddTweet>
          </div>
        </li>
      </div>

      <div>
        <li className={classes.sideMenuListItem}></li>
      </div>
    </ul>
  );
};
