import { makeStyles } from '@material-ui/core';

export const useProjects = makeStyles((theme) => ({
  root: {
    height: 240,
    width: '50%',
    padding: 10,
  },
  imgFullWidth: {
    top: '0 !important',
    transform: 'none !important',
  },
  moreInfo: {
    // display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    background: 'teal',
    width: '100%',
    zIndex: 49,
  },
  tileBar: {
    zIndex: 50,
    background: 'rgba(200,0,85)',
  },
}));
