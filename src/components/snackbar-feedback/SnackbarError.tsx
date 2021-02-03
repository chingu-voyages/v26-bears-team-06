import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { SnackbarState } from '../../redux/snackbars/snackbarsReducer';
import { closeError, openError } from '../../redux/snackbars/snackbarsActions';
import { RootStore } from '../../redux/store';

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

export default function SnackBarError() {
  const classes = useStyles();
  const errorOpen = useSelector<RootStore, SnackbarState["errorOpen"]>(state => state.snackbar.errorOpen);
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeError());
  };

  return (
    <div className={classes.root}>
      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error">
          Email and/or password were incorrect.
        </Alert>
      </Snackbar>
    </div>
  );
}