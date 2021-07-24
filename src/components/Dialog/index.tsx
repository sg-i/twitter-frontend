import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

interface ModalBlockProps {
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
}
export const ModalBlock: React.FC<ModalBlockProps> = ({
  title = '',
  onClose,
  children,
}): React.ReactElement => {
  return (
    <div>
      <Dialog onClose={onClose} open={true}>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </Dialog>
    </div>
  );
};
