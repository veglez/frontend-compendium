import { makeStyles } from '@material-ui/core';

export const useIntro = makeStyles((theme) => ({
  header: {
    textAlign: 'justify',
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
