import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, Dialog, makeStyles, TextField, Typography } from '@material-ui/core';
import { OpenInBrowser } from '@material-ui/icons';
import { ModalBlock } from '../components/Dialog';

const useStylesSignIn = makeStyles((theme) => ({
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
  lofinSideContainer: {
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
  loginSideButton: {
    height: '50px',
    display: 'block',
    width: '50%',
    marginBottom: '20px',
  },
}));
function SignIn() {
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
          <TwitterIcon color="secondary" className={classes.blueSideTwitterIcon} />
        </section>
        <section className={classes.loginSide}>
          <div className={classes.lofinSideContainer}>
            <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
            <Typography className={classes.loginSideTitle} variant="h2">
              В курсе происходящего
            </Typography>
            <Typography className={classes.loginSideSubTitle} variant="h4">
              Присоединяйтесь к Твиттеру прямо сейчас!
            </Typography>
            <Button
              onClick={handelClickOpenSignUp}
              className={classes.loginSideButton}
              variant="contained"
              fullWidth
              color="primary">
              Зарегистрироваться
            </Button>
            <Button
              onClick={handelClickOpenSignIn}
              className={classes.loginSideButton}
              variant="outlined"
              fullWidth
              color="primary">
              Войти
            </Button>

            {visibleModal === 'signIn' && (
              <ModalBlock onClose={handleCloseModal} title="Войдите в учетную запись">
                <TextField>ВХод</TextField>
              </ModalBlock>
            )}
            {visibleModal === 'signUp' && (
              <ModalBlock onClose={handleCloseModal} title="Создайте учетную запись">
                <TextField>Регистрация</TextField>
              </ModalBlock>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
