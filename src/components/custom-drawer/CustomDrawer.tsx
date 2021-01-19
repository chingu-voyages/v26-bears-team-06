import React from 'react';
// Material UI Components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';
// Styles: 
import { useStyles } from './CustomDrawer.styles';
// Seed Data: 
import { seedCategories } from '../../seed/seedData';

// Props interface (types):
interface Props {
  open: boolean,
  handleClose: () => void,
}

const CustomDrawer:React.FC<Props> = ({ open, handleClose}) => {
  const classes = useStyles();
  const Goods = seedCategories[0];
  const Housing = seedCategories[1];
  const Jobs = seedCategories[2];
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
        <Typography variant="h4">Select Filters</Typography>
        <IconButton onClick={handleClose}>
          <ChevronLeftIcon />
          Close
        </IconButton>
      </div>
      <Divider />
      <div className={classes.filterCategories}>
        <h2>{Goods.name}</h2>
        {Goods.subCategories.map(subCategory => (
                <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    value='Goods/id'
                  />
                }
                label={subCategory.name}
              />
        ))}
        <h2>{Housing.name}</h2>
        {Housing.subCategories.map(subCategory => (
                <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    value='Housing/id'
                  />
                }
                label={subCategory.name}
              />
        ))}
        <h2>{Jobs.name}</h2>
        {Jobs.subCategories.map(subCategory => (
                <FormControlLabel
                control={
                  <Checkbox
                    name="checkedB"
                    color="primary"
                    value='Jobs/id'
                  />
                }
                label={subCategory.name}
              />
        ))}
        <button className={classes.searchButton}><SearchIcon/>Search</button>
      </div>
    </Drawer>
  )
};

export default CustomDrawer;