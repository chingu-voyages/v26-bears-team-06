import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleSection: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      width: '15%',
      height: '20%',
    }
  },
  image: {
    width: '75%',
    borderRadius: '20px',
    margin: '1em 0',
  },
  locationPrice: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '22px'
  },
  bottomSection: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
  },
  postButtons: {
    display: 'flex',
    width: '100%',
    marginTop: '10px',
    justifyContent: 'space-between'
  }
})