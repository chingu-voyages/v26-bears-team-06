import React from 'react';
import { useStyles } from './ReusableHeader.styles';

interface Props {
  text: string
}

const ReusableHeader:React.FC<Props> = ({ text }) => {
  const classes = useStyles();
  return <div className={classes.header2}>{text}</div>;
};

export default ReusableHeader;
