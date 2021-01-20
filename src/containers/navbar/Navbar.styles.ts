import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
  rightSide: {
    display: 'flex',
    width: '72%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    width: '24%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '2rem'
  },
  authLinksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  authLink: {
    textDecoration: 'none',
    color: 'black',
    padding: '0 5px',
    opacity: '0.65',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: '1'
    }
  },
  categoriesDropDownList: {
    display: 'flex',
    listStyle: 'none',
    width: '25%',
    justifyContent: 'space-between',
    padding: '0'
  },
});