import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { useStyles } from './CategoryRadioButtons.styles';

interface Props {
  name: string,
  subCategories: {
    name: string,
    id: string
  }[]
}

const CategoryRadioButtons:React.FC<Props> = ({name, subCategories}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>{name}:</h3>
      {
        subCategories.map(({name, id}) => (
          <FormControlLabel 
          value={name} 
          control={<Radio color='default' />} 
          label={name}
          key={id}
         />
        ))
      }
      
    </div>
  )
};

export default CategoryRadioButtons;