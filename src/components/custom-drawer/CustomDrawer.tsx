import React from 'react';
// Material UI Components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// Styles: 
import { useStyles } from './CustomDrawer.styles';
// Props interface (types):
interface Props {
  open: boolean,
  handleClose: () => void,
}

const CustomDrawer:React.FC<Props> = ({ open, handleClose}) => {
  const classes = useStyles();
  return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleClose}>
          <ChevronLeftIcon />
          Close
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