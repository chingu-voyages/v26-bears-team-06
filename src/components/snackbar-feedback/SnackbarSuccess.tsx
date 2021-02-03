import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { SnackbarState } from '../../redux/snackbars/snackbarsReducer';
import { closeSuccess, openSuccess } from '../../redux/snackbars/snackbarsActions';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackbarSuccess() {
  const classes = useStyles();
  const successOpen = useSelector<RootStore, SnackbarState["successOpen"]>(state => state.snackbar.successOpen);
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSuccess());
  };

  return (
    <div className={classes.root}>
      <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Login Successful!
        </Alert>
      </Snackbar>
    </div>
  );
}