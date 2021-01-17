import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header2: {
    color: 'black',
    fontSize: '24px',
  },
});

const Headline2 = ({ headline }) => {
  const classes = useStyles();
  return <div className={classes.header2}>{headline}</div>;
};

export default Headline2;
