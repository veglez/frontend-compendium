import { makeStyles } from '@material-ui/core';

export const useAbout = makeStyles((theme) => ({
  tech: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    gap: 40,
  },
  myWebsite: {
    textTransform: 'uppercase',
    color: `${theme.palette.primary.main} !important`,
    fontWeight: 'bold',
  },
}));
