import IconButton from '@material-ui/core/IconButton/IconButton';
import React from 'react';
import BackIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import { useHistory } from 'react-router-dom';
export const BtnGoBack: React.FC = (): React.ReactElement => {
  const history = useHistory();
  const HandleBtnGoBack = () => {
    history.goBack();
  };
  return (
    <div>
      <IconButton color="primary" onClick={HandleBtnGoBack}>
        <BackIcon />
      </IconButton>
    </div>
  );
};
