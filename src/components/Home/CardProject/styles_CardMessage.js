import { makeStyles } from '@material-ui/core';

export const useCardProject = makeStyles((theme) => ({
  message: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    bottom: 0,
    zIndex: 10,
    background: theme.palette.primary.light, //'#735698',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 22,
    '& svg': {
      fontSize: 64,
    },
  },
}));
