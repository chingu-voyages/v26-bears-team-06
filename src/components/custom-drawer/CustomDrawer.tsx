import React from 'react';
import { useStyles } from './CustomDrawer.styles';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const CustomDrawer:React.FC = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={false}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
    <div className={classes.drawerHeader}>
      <IconButton>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <div>
      <Typography variant="h4" gutterBottom>Select Filters</Typography>
    </div>
  </Drawer>
  )
};

export default CustomDrawer;