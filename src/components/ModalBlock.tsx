import React from 'react';
import {
  createStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '0 auto',
    },
  }),
);
interface ModalBlockProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}
export const ModalBlock: React.FC<ModalBlockProps> = ({
  title = '',
  onClose,
  children,
}): React.ReactElement => {
  const classes = useStyles();
  return (
    <div>
      <Dialog className={classes.root} onClose={onClose} open={true}>
        <TwitterIcon
          style={{ margin: '10px auto', marginBottom: '0' }}
          fontSize="large"
          color="primary"
        />
        <DialogTitle>
          <Typography style={{ fontWeight: 700 }} variant="h5">
            {title}
          </Typography>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};
