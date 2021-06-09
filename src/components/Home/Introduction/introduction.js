import { makeStyles } from '@material-ui/core';

export const useIntro = makeStyles((theme) => ({
  header: {
    textAlign: 'justify',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
  subtitle: {
    textAlign: 'left',
  },

  externalLink: {
    color: `${theme.palette.primary.main} !important`,
  },

  route: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
}));
