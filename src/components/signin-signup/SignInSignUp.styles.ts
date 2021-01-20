import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent:'center',
    width: 'fit-content'
  },
  dialogContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  dialogForms: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  signIn: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 3rem'
  },
  signUp: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem 3rem'
  },
  input: {
    width: '480px',
    marginBottom: '1rem'
  }
})