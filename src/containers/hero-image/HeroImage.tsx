import React from 'react';
// Styles:
import { useStyles } from '../hero-image/HeroImage.styles';

const HeroImage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <div className={classes.hero}>  
      </div>
    </div>
  )
};

export default HeroImage;