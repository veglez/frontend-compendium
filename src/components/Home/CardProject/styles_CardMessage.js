import { makeStyles } from '@material-ui/core';

export const useCardProject = makeStyles((theme) => ({
  message: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    bottom: 0,
    zIndex: 10,
    background: theme.palette.primary.main, //'#735698',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    gap: 22,
    '& svg': {
      fontSize: 64,
    },
  },
}));
