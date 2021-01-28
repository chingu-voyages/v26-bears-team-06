import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      width: '15%',
      height: '20%',
    }
  },
  image: {
    width: '100%',
    borderRadius: '20px',
    margin: '1em 0',
  },
  locationPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '22px'
  }
})