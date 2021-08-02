import { Avatar, Button, Grid, IconButton, Typography } from '@material-ui/core';
import { spawn } from 'child_process';
import classNames from 'classnames';
import React from 'react';
import { useHomeStyles } from '../../pages/Home/theme';


import cN from 'classnames';

interface WhoToReadItemProps {
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    username: string;
    fullname: string;
    imageUrl: string;
  };
}
export const WhoToReadItem: React.FC<WhoToReadItemProps> = ({
  user,
  classes,
}: WhoToReadItemProps): React.ReactElement => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar
        className={classes.tweetUserAvatar}
        alt={`Аватарка пользователя $'{user.fullname'}`}
        src={user.imageUrl}></Avatar>
      <div
        style={{
          marginLeft: 10,
          display: 'flex',
          flexDirection: 'column',
          width: 155,
          flexWrap: 'nowrap',
        }}>
        <b style={{ fontSize: 15, color: '#0F1419', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {user.username}
        </b>
        <span style={{ fontSize: 15, color: '#536471', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          {'@' + user.fullname}
        </span>
      </div>
      <div style={{ padding: 5 }}>
        <Button style={{ width: 82, height: 32 }} variant="outlined" fullWidth color="primary">
          Читать
        </Button>
      </div>
    </div>
  );
};
