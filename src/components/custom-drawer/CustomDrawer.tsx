import React, { useEffect, useState } from 'react';
// Material UI Components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';
// Styles: 
import { useStyles } from './CustomDrawer.styles';
// Seed Data: 
import { seedCategories } from '../../seed/seedData';
// Redux:
import { useDispatch } from 'react-redux';
import { setSubcatQuery } from '../../redux/drawer/drawerActions';

// Props interface (types):
interface Props {
  open: boolean,
  handleClose: () => void,
}

const CustomDrawer:React.FC<Props> = ({ open, handleClose}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const Goods = seedCategories[0];
  const Housing = seedCategories[1];
  const Jobs = seedCategories[2];
  const [subcats, setSubcats] = useState({
    Electronics: '',
    Cars: '',
    Furniture: '',
    Office: '',
    Appliances: '',
    Clothing: ''
  });

  useEffect(() => {
    dispatch(setSubcatQuery(Object.values(subcats).join('')));
  }, [subcats]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) {
      setSubcats({ ...subcats, [event.target.name]: event.target.value });
    } else {
      setSubcats({...subcats, [event.target.name]: ''});
    }
  };

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
        <Typography variant="h5">Select Filters</Typography>
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
                key={subCategory.id}
                control={
                  <Checkbox
                    name={subCategory.name}
                    color="primary"
                    value={`sc=${subCategory.id}&`}
                    onChange={handleChange}
                  />
                }
                label={subCategory.name}
              />
        ))}
        <h2>{Housing.name}</h2>
        {Housing.subCategories.map(subCategory => (
                <FormControlLabel
                  key={subCategory.id}
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                      value='Housing/id'
                      disabled
                    />
                }
                label={subCategory.name}
              />
        ))}
        <h2>{Jobs.name}</h2>
        {Jobs.subCategories.map(subCategory => (
                <FormControlLabel
                  key={subCategory.id}
                  control={
                    <Checkbox
                      name="checkedB"
                      color="primary"
                      value='Jobs/id'
                      disabled
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