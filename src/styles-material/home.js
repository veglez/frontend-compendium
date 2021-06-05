import { makeStyles } from '@material-ui/core';

export const homeStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(8),
    padding: theme.spacing(2, 6),
  },
  mainH1: {
    textAlign: 'center',
  },
}));
