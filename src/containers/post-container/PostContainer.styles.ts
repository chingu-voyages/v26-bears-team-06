import { makeStyles } from '@material-ui/core/styles';
import sizes from "../../styles/constants/MediaQueries";


export const useStyles = makeStyles({
  root: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [sizes.down('sm')]: {
      width: '100%',
    },
    [sizes.down('lg')]: {
      width: '80%',
    },
    
  },
  titleSection: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      width: '15%',
      height: '20%',
    },
    [sizes.down('sm')]: {
      fontSize: '18px',
      width: '95%'
    },
  },
  image: {
    width: '75%',
    borderRadius: '20px',
    margin: '1em 0',
    [sizes.down('sm')]: {
      width: '95%'
    },
  },
  locationPrice: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '22px',
    [sizes.down('sm')]: {
      fontSize: '18px',
      width: '95%'
    },
  },
  description: {
    [sizes.down('sm')]: {
      fontSize: '14px',
    },
  },
  bottomSection: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    [sizes.down('sm')]: {
      width: '95%'
    },
  },
  postButtons: {
    display: 'flex',
    width: '100%',
    marginTop: '10px',
    justifyContent: 'space-between'
  }
})