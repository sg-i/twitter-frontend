import React from 'react';
import cN from 'classnames';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
  Button,
  darken,
  Dialog,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { OpenInBrowser } from '@material-ui/icons';
import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    width: '50%',
    backgroundColor: 'rgb(26,145,218)',
    backgroundImage: 'URL(img/Sign/lohp_1302x955.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSideTwitterIcon: {
    width: '50%',
    fontSize: 400,
    minWidth: '100px',
    fill: '#fff',
  },
  loginSide: {
    display: 'flex',
    minWidth: '750px',
    width: '50%',
  },
  loginSideTwitterIcon: {
    fontSize: 50,
    marginBottom: '30px',
  },
  loginSideContainer: {
    margin: 'auto',
    width: '720px',
  },
  loginSideTitle: {
    fontWeight: 800,
    fontSize: 70,
    marginBottom: '60px',
  },
  loginSideSubTitle: {
    fontWeight: 600,
    fontSize: 35,
    marginBottom: '30px',
  },
  loginSideGroupButton: {
    width: '50%',
  },
  loginSideButton: {
    width: '100%',
    height: '50px',
    display: 'block',
    marginBottom: '20px',
    boxShadow: 'none',
  },
  loginSideButtonSignUp: {
    '&:hover': {
      backgroundColor: 'rgb(26, 145, 218)',
      boxShadow: 'none',
    },
  },
  loginSideButtonSignIn: {
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.1)',
      boxShadow: 'none',
    },
  },
  loginSideTextField: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: '27px',
  },
}));
export function SignIn() {
  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();
  const handelClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };
  const handelClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };
  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };
  const classes = useStylesSignIn();
  return (
    <div>
      <div className={classes.wrapper}>
        <section className={classes.blueSide}>
          <TwitterIcon className={classes.blueSideTwitterIcon} />
        </section>
        <section className={classes.loginSide}>
          <div className={classes.loginSideContainer}>
            <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
            <Typography className={classes.loginSideTitle} variant="h2">
              ?? ?????????? ??????????????????????????
            </Typography>
            <Typography className={classes.loginSideSubTitle} variant="h4">
              ?????????????????????????????? ?? ???????????????? ?????????? ????????????!
            </Typography>
            <div className={classes.loginSideGroupButton}>
              <Button
                onClick={handelClickOpenSignUp}
                className={cN(classes.loginSideButton, classes.loginSideButtonSignUp)}
                variant="contained"
                fullWidth
                color="primary">
                ????????????????????????????????????
              </Button>
              <Button
                onClick={handelClickOpenSignIn}
                className={cN(classes.loginSideButton, classes.loginSideButtonSignIn)}
                variant="outlined"
                fullWidth
                color="primary">
                ??????????
              </Button>
            </div>
            {visibleModal === 'signUp' && (
              <ModalBlock onClose={handleCloseModal} title="???????????????? ?????????????? ????????????">
                <TextField className={classes.loginSideTextField} variant="outlined" label="??????">
                  ??????
                </TextField>
                <TextField
                  className={classes.loginSideTextField}
                  variant="outlined"
                  label="?????????? ?????????????????????? ??????????">
                  ??????????????????????
                </TextField>
                <TextField
                  type="password"
                  className={classes.loginSideTextField}
                  variant="outlined"
                  label="????????????">
                  ????????????
                </TextField>
                <Button
                  variant="contained"
                  color="primary"
                  className={cN(classes.loginSideButton, classes.loginSideButtonSignUp)}>
                  ????????????????????????????????????
                </Button>
              </ModalBlock>
            )}
            {visibleModal === 'signIn' && (
              <ModalBlock onClose={handleCloseModal} title="?????????????? ?? ?????????????? ????????????">
                <TextField
                  className={classes.loginSideTextField}
                  variant="outlined"
                  label="?????????? ?????????????????????? ??????????">
                  ??????????
                </TextField>

                <TextField
                  type="password"
                  className={classes.loginSideTextField}
                  variant="outlined"
                  label="????????????">
                  ????????????
                </TextField>
                <Button
                  variant="contained"
                  color="primary"
                  className={cN(classes.loginSideButton, classes.loginSideButtonSignUp)}>
                  ??????????
                </Button>
              </ModalBlock>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
