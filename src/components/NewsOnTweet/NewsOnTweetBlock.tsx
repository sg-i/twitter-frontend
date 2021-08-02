import { Avatar, Divider, List, ListItem, Typography } from '@material-ui/core';
import { spawn } from 'child_process';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHomeStyles } from '../../pages/Home/theme';

import {
  selectPopularTweetsLoadingState,
  selectPopularTweetsItems,
} from '../../store/ducks/popularTweets/selectors';
import { NewsOnTweetItem } from './NewsOnTweetItem';

interface NewsOnTweetBlockProps {
  classes: ReturnType<typeof useHomeStyles>;
}
export const NewsOnTweetBlock: React.FC<NewsOnTweetBlockProps> = ({
  classes,
}: NewsOnTweetBlockProps): React.ReactElement => {
  const popularTweets = useSelector(selectPopularTweetsItems);
  const isLoaded = useSelector(selectPopularTweetsLoadingState);
  return (
    <div className={classes.newsOnTweet}>
      {isLoaded === 'LOADED' && (
        <List style={{ padding: 0 }}>
          <ListItem>
            <Typography style={{ fontFamily: 'Segoe UI', fontWeight: 900 }} variant="h6">
              Что нового?
            </Typography>
          </ListItem>
          <Divider light variant="fullWidth" component="li" />
          {popularTweets.map((el) => (
            <>
              <ListItem button>
                <NewsOnTweetItem
                  tweet={{
                    username: el.user.username,
                    avatarUrl: el.user.avatarUrl,
                    textOfTweet:
                      el.text.length > 128
                        ? el.text.slice(0, el.text.slice(0, 128).lastIndexOf(' '))
                        : el.text,
                  }}
                  classes={classes}
                />
              </ListItem>
              <Divider light variant="fullWidth" component="li" />
            </>
          ))}

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
      )}{' '}
    </div>
  );
};
