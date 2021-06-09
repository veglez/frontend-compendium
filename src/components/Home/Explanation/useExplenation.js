import { makeStyles } from '@material-ui/core';

export const useExplanation = makeStyles((theme) => ({
  modalImg: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(100%, 470px)',
  },
  container: {
    width: '100%',
    // wordBreak: 'break-word',
    overflowWrap: 'break-word',
  },
  extra: {
    margin: theme.spacing(4, 0),
  },
}));
