import { Avatar, Divider, List, ListItem, Typography } from '@material-ui/core';
import { spawn } from 'child_process';
import classNames from 'classnames';
import React from 'react';
import { useHomeStyles } from '../../pages/Home';
import { NewsOnTweetItem } from './NewsOnTweetItem';

interface NewsOnTweetBlockProps {
  classes: ReturnType<typeof useHomeStyles>;
}
export const NewsOnTweetBlock: React.FC<NewsOnTweetBlockProps> = ({
  classes,
}: NewsOnTweetBlockProps): React.ReactElement => {
  return (
    <div className={classes.newsOnTweet}>
      <List style={{ padding: 0 }}>
        <ListItem>
          <Typography style={{ fontFamily: 'Segoe UI', fontWeight: 900 }} variant="h6">
            Что нового?
          </Typography>
        </ListItem>
        <Divider light variant="fullWidth" component="li" />

        <ListItem button>
          <NewsOnTweetItem
            tweet={{
              username: 'The Times',
              avatarUrl:
                'https://pbs.twimg.com/profile_images/1273572997614440450/ULkR08Er_400x400.png',
              textOfTweet: 'Is the anti-Olympic mood turning in Japan?',
              addedImageUrl: 'https://pbs.twimg.com/media/E7Oz9CJX0AUVhUo?format=jpg&name=900x900',
            }}
            classes={classes}
          />
        </ListItem>
        <Divider light variant="fullWidth" component="li" />
        <ListItem button>
          <NewsOnTweetItem
            tweet={{
              username: 'anny',
              avatarUrl:
                'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              textOfTweet: 'it also turned the pretty orange lights into piss yellow',
            }}
            classes={classes}
          />
        </ListItem>
        <Divider light variant="fullWidth" component="li" />
        <ListItem button>
          <NewsOnTweetItem
            tweet={{
              username: 'The Times',
              avatarUrl:
                'https://pbs.twimg.com/profile_images/1273572997614440450/ULkR08Er_400x400.png',
              textOfTweet: 'Is the anti-Olympic mood turning in Japan?',
              addedImageUrl: 'https://pbs.twimg.com/media/E7Oz9CJX0AUVhUo?format=jpg&name=900x900',
            }}
            classes={classes}
          />
        </ListItem>
        <Divider light variant="fullWidth" component="li" />
        <ListItem button>
          <NewsOnTweetItem
            tweet={{
              username: 'The Times',
              avatarUrl:
                'https://pbs.twimg.com/profile_images/1273572997614440450/ULkR08Er_400x400.png',
              textOfTweet: 'Is the anti-Olympic mood turning in Japan?',
              addedImageUrl: 'https://pbs.twimg.com/media/E7Oz9CJX0AUVhUo?format=jpg&name=900x900',
            }}
            classes={classes}
          />
        </ListItem>
        <Divider light variant="fullWidth" component="li" />
        <ListItem button>
          <NewsOnTweetItem
            tweet={{
              username: 'anny',
              avatarUrl:
                'https://pbs.twimg.com/profile_images/1226619642543624192/4BwE4CaZ_400x400.jpg',
              textOfTweet: 'it also turned the pretty orange lights into piss yellow',
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
