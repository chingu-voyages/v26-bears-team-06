import React from 'react';
// Material UI:
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { useStyles } from './CategoryRadioButtons.styles';
// Redux:
import { Post } from '../../redux/post/postTypes';
interface Props {
  name: string,
  subCategories: {
    name: string,
    id: number,
    posts: Post[]
  }[]
}

const CategoryRadioButtons:React.FC<Props> = ({name, subCategories}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>{name}:</h3>
      { 
        subCategories.map(({name, id, posts}) => (
          posts.length === 0 ?
          <FormControlLabel 
            value={id}  
            control={<Radio color='default' />} 
            label={name}
            key={id}
            disabled
         />
         :
         <FormControlLabel 
            value={id.toString()} 
            control={<Radio color='primary' />} 
            label={name}
            key={id}
          />
        ))
      }
      
    </div>
  )
};

export default CategoryRadioButtons;