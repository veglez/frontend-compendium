import { makeStyles } from '@material-ui/core';

export const homeStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(8),
    margin: '50px auto',
    width: '75vw',
    '@media screen and (max-width:600px )': {
      width: '90vw',
    },
  },
  mainH1: {
    textAlign: 'center',
  },

  buttonText: {
    color: 'white',
  },
}));
