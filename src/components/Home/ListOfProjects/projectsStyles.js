import { makeStyles } from '@material-ui/core';

export const useProjects = makeStyles((theme) => ({
  container: {
    width: '90vw',
    margin: theme.spacing(2, 'auto'),
  },
  imgFullWidth: {
    top: '0 !important',
    transform: 'none !important',
  },
  tileBar: {
    zIndex: 50,
    background: 'rgba(200,0,85)',
    cursor: 'pointer',
  },
  externalLink: {
    color: `${theme.palette.primary.main} !important`,
    weight: 'bold',
  },
}));
