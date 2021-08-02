import { Avatar, Divider, List, ListItem, Typography } from '@material-ui/core';
import { spawn } from 'child_process';
import classNames from 'classnames';
import React from 'react';
import { useHomeStyles } from '../../pages/Home/theme';

import { WhoToReadItem } from './WhoToReadItem';

interface WhoToReadBlockProps {
  classes: ReturnType<typeof useHomeStyles>;
}
export const WhoToReadBlock: React.FC<WhoToReadBlockProps> = ({
  classes,
}: WhoToReadBlockProps): React.ReactElement => {
  return (
    <div className={classes.newsOnTweet}>
      <List style={{ padding: 0 }}>
        <ListItem>
          <Typography style={{ fontFamily: 'Segoe UI', fontWeight: 900 }} variant="h6">
            Кого читать?
          </Typography>
        </ListItem>
        <Divider light variant="fullWidth" component="li" />

        <ListItem button>
          <WhoToReadItem
            user={{
              username: 'Watson Amelia holoEN',
              fullname: 'watsonameliaEN',
              imageUrl:
                'https://pbs.twimg.com/profile_images/1318958836120649728/7JHxy2UO_400x400.jpg',
            }}
            classes={classes}
          />
        </ListItem>
        <Divider light variant="fullWidth" component="li" />
        <ListItem button>
          <WhoToReadItem
            user={{
              username: 'MarineSnow',
              fullname: 'MarineSnow257',
              imageUrl:
                'https://pbs.twimg.com/profile_images/1373631943192027136/n5DVwwMN_400x400.jpg',
            }}
            classes={classes}
          />
        </ListItem>
        <Divider light variant="fullWidth" component="li" />

        <ListItem
          style={{
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            height: '100%',
          }}
          button>
          <span style={{ margin: 5, color: '#1DA1F2' }}>Показать еще</span>
        </ListItem>
      </List>
    </div>
  );
};
