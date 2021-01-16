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
  },
  bottomRow: {
    display: 'flex',
    width: '100%',
  },
  rightSide: {
    display: 'flex',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSide: {
    display: 'flex',
    width: '20%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '3rem'
  },
  categoriesDropDownList: {
    display: 'flex',
    listStyle: 'none',
    width: '15%',
    justifyContent: 'space-between',
    padding: '0'
  }   
})