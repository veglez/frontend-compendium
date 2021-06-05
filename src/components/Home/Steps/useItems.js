import { makeStyles } from '@material-ui/core';

export const useItems = makeStyles((theme) => ({
  route: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  variable: {
    color: theme.palette.secondary.light,
  },
  list: {
    '& *': { textAlign: 'justify' },
  },
}));
