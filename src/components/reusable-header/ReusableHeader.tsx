import React from 'react';
import { useStyles } from './ReusableHeader.styles';

interface Props {
  text: string,
  fontSize: string,
}

const ReusableHeader:React.FC<Props> = ({ text, fontSize}) => {
  const classes = useStyles();
  return <div className={classes.header2} style={{fontSize: fontSize}}>{text}</div>;
};

export default ReusableHeader;
