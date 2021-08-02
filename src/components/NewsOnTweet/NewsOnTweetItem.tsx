import { Avatar } from '@material-ui/core';
import { spawn } from 'child_process';
import classNames from 'classnames';
import React from 'react';
import { useHomeStyles } from '../../pages/Home/theme';

interface NewsOnTweetItemProps {
  classes: ReturnType<typeof useHomeStyles>;
  tweet: {
    username: string;
    avatarUrl: string;
    textOfTweet: string;
    addedImageUrl?: string;
  };
}
export const NewsOnTweetItem: React.FC<NewsOnTweetItemProps> = ({
  tweet,
  classes,
}: NewsOnTweetItemProps): React.ReactElement => {
  return (
    <div className={classes.NewsOnTweetItemWrapper}>
      <div className={classes.NewsOnTweetItemMainSide}>
        <div className={classes.NewsOnTweetItemUser}>
          <Avatar
            style={{ height: 16, width: 16, marginRight: 4 }}
            alt="user avatar"
            src={tweet.avatarUrl}
          />
          <span style={{ fontSize: 13, color: '#536471' }}>
            <b style={{ color: '#0F1419' }}>{tweet.username}</b>
            {' · 1 час назад'}
          </span>
        </div>

        <div style={{ marginTop: 3 }}>
          {tweet.addedImageUrl ? (
            <b style={{ fontSize: 15 }}>{tweet.textOfTweet}</b>
          ) : (
            <span style={{ fontSize: 15, color: '#536471' }}>{tweet.textOfTweet}</span>
          )}
        </div>
      </div>
      <div>
        {tweet.addedImageUrl && (
          <Avatar
            style={{ height: 68, width: 68, borderRadius: 15 }}
            variant="rounded"
            src={tweet.addedImageUrl}
          />
        )}
      </div>
    </div>
  );
};
