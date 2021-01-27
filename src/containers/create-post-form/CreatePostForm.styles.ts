import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formInput: {
    width: '100%',
    margin: '.25em',
    marginLeft: '0',
  },
  textInputs: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '1rem',
  },
  topRowContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.25em',
    marginLeft: '0',
    marginTop: '1rem',
  },
  postTitleInput: {
    width: '77.25%'
  },
  priceInput: {
    width: '22%',
  },
  radioButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: '.25em',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
  },
  button: {
    margin: '0.25em',
    marginLeft: '0',
    marginRight: '0.5em'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  }
});