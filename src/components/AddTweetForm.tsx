import {
  Avatar,
  Grid,
  TextareaAutosize,
  Paper,
  IconButton,
  Button,
  Box,
  Typography,
  Divider,
} from '@material-ui/core';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import React from 'react';
import cN from 'classnames';
import { useHomeStyles } from '../pages/Home';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>;
}
const MAX_TWEET_LENTH = 280;
export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>('');

  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };
  const handleClickAddTweet = (): void => {
    if (text.length > 0) {
      setText('');
    }
  };
  return (
    <Paper className={cN(classes.tweetsHeader, classes.addTweetPaper)} variant="outlined" square>
      {' '}
      <Grid container>
        <Grid style={{ minWidth: '70px' }} item xs={1}>
          <Avatar
            className={classes.tweetUserAvatar}
            alt={`Аватарка пользователя `}
            src="https://pbs.twimg.com/profile_images/1405512979701977093/9QxAxP4b_400x400.jpg"></Avatar>
        </Grid>
        <Grid item xs>
          <TextareaAutosize
            onChange={handleChangeTextArea}
            value={text}
            className={classes.addTweetTextArea}
            placeholder="Что происходит?"></TextareaAutosize>
          <Divider light variant="fullWidth" />

          <div className={classes.AddTweetFormOption}>
            <div className={classes.AddTweetFormMenu}>
              <IconButton color="primary">
                <ImageOutlinedIcon></ImageOutlinedIcon>
              </IconButton>
              <IconButton color="primary">
                <SentimentSatisfiedOutlinedIcon></SentimentSatisfiedOutlinedIcon>
              </IconButton>
            </div>
            {text && (
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  size={text.length >= MAX_TWEET_LENTH - 20 ? 30 : 25}
                  variant="determinate"
                  value={text.length >= MAX_TWEET_LENTH ? 100 : (text.length / 280) * 100}
                  style={
                    text.length >= 260 && text.length < 280
                      ? { color: 'orange' }
                      : text.length >= MAX_TWEET_LENTH
                      ? { color: 'red' }
                      : undefined
                  }
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center">
                  <Typography variant="caption" component="div" color="textSecondary">
                    {text.length >= MAX_TWEET_LENTH - 20 && MAX_TWEET_LENTH - text.length}
                  </Typography>
                </Box>
              </Box>
            )}
            <Button
              onClick={handleClickAddTweet}
              //   disabled={text.length > MAX_TWEET_LENTH || text.length === 0}
              className={classes.AddTweetFormButton}
              variant="contained"
              color="primary">
              Твитнуть
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
